app.controller("navbarCtrl",function($scope, serverData){
  // >Generate site wide nav links
  serverData.getLink().then(function(data){
    $scope.data=data.data;

    $( "ul.nav" ).click(function(event){
      
      var ele = $(event.target);
      var hash=$(ele[0].hash)
      if(hash){
        event.preventDefault();
        $('html, body').stop().animate({
            'scrollTop': hash.offset().top
        }, 900, 'swing');
      }
    });
  },function(err){
    console.error(err);
  });
  serverData.getBrand().then(function(data){
    $scope.brand=data.data;
  },function(err){
    console.error(err);
  });
});

app.controller("memberCtrl",function($scope, serverData){
  // >Generate member list
  serverData.getMember().then(function(data){
    $scope.data=data.data;
  },function(err){
    console.log(err);
  });
});

app.controller("audioCtrl",function($scope, serverData,jukebox){
  // >Generate audio list
  serverData.getAudio().then(function(data){
    $scope.data=data.data;

    // >>Set Audio Player
    jukebox.set(data.data,finished);

    // >>Playback control
    $scope.playback=function(id){
      switch(status(id)){
        case "playing":
          jukebox.playpause();
          controllUpdate("play");
        break;
        case "paused":
          jukebox.playpause();
          controllUpdate("pause");
        break;
        case "ready":
          jukebox.playpause(id);
          controllUpdate("pause");
          albumUIUpdate("show",id,$scope.data[id].title);
        break;
      }
    }

    // >>Set playback Control UI
    function controllUpdate(p){
      $(".music-player .glyphicon")
      .removeClass("glyphicon-pause")
      .removeClass("glyphicon-play");

      switch(p){
        case "pause":
          $(".music-player .glyphicon")
          .addClass("glyphicon-pause");
        break;
        case "play":
          $(".music-player .glyphicon")
          .addClass("glyphicon-play");
        break;
      }      
    }

    // >>Set Album UI
    function albumUIUpdate(state,id,title){
      switch(state){
        case "hide":
          $(".music-player .cover-art")
          .slideUp(function(){
            $(this).attr("src", "");
          });

          $(".music-player h3")
          .slideUp();

          $scope.playing="";
        break;
        case "show":
          $(".music-player .cover-art")
          .attr("src", $scope.data[id].cover)
          .slideDown(function(){
            $(this).height(300);
          });

          $scope.playing=title;

          $(".music-player h3")
          .slideDown();
        break;
      }
    }

    // >>Get player status
    function status(id){
      if(id!==undefined)
      {
        return "ready";
      }
      return jukebox.status();
    }

    // >>When playback finishes...
    function finished(){
      $(".music-player .glyphicon")
      .removeClass("glyphicon-pause")
      .removeClass("glyphicon-play");
      controllUpdate("ready");
      albumUIUpdate("hide");
    }
  },function(err){
    console.error(err);
  });
});

app.controller("eventCtrl",function($scope, serverData){
  serverData.getEvent().then(function(data){
    $scope.data=data.data;
  },function(err){
    console.log(err);
  });
});

app.controller("bookCtrl",function($scope, serverData, $timeout, $window){
  serverData.getBooking().then(function(data){
    // >>DateTime picker setup
    $('#dtBox').DateTimePicker(
      {
        dateFormat: "MM-dd-yyyy",
        timeFormat: 'hh:mm AA'
      }
    );
    
    // >>Set data
    $scope.data=data.data;

    // >>Form submit function
    $scope.submit=function(){
      $scope.event=$scope.data.type[$scope.type].event;
      $scope.price=$scope.data.type[$scope.type].price;

      // >>>Validate Date
      if(!dateValidation($scope.date)){
        return;
      }
      
      // >>>Show confirmation modal
      $('#confirm-modal').modal('show');
      $('.modal .btn-success').click(function(){
        $('.main-section').slideUp(function(){
          $('#thankyou').fadeIn();
          $timeout(function(){
            $window.location.assign('/');
          },2000);
        });
      });
    }    
  },function(err){
    console.error(err);
  });
  // >>Date validation function
  function dateValidation(dateStr){
    // >>>Check to see if date is not already booked.
    for (var i = $scope.data.booked.length - 1; i >= 0; i--) {
      if($scope.data.booked[i]==dateStr){
        $scope.form.date.$invalid=true;
        return false;
      }
    }
    // >>>Check to see if date is at least 60 days in the future
    var date=new Date(dateStr);
    var now=new Date();
    now=new Date(now.getFullYear(),now.getMonth()+$scope.data.notice,now.getDate());
    if(date.getTime()>now.getTime()){
      return true;
    }
    else{
      $scope.form.date.$invalid=true;
      return false;
    }
  }
});

app.controller("infoCtrl",function($scope, serverData){
  // >Generate event type info
  serverData.getType().then(function(data){
    $scope.data=data.data;
  },function(err){
    console.error(err);
  });
});

app.controller('socialCtrl',function($scope, serverData){
  serverData.getSocial().then(function(data){
    $scope.data=data.data;
  },function(err){
    console.error(err);
  });
});