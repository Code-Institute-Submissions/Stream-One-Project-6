const app = angular.module('app',['ngRoute']);
app.config(function($routeProvider,$locationProvider)
{
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/',{ templateUrl:'app/template/home.html'});
});
app.controller("navbarCtrl",function($scope, serverData){
  // >Generate site wide nav links
  serverData.getLink().then(function(data){
    $scope.data=data.data;
    $( "ul.nav" ).click(function(event){
      var ele = $(event.target);
      var hash=$(ele[0].hash)
      if(hash.length > 0){
        event.preventDefault();
        var winWidth = $(window).outerWidth();
        if(winWidth >= 768 && winWidth <= 990){
          console.log('stop')
          $('html, body').stop().animate({
            'scrollTop': hash.offset().top - 100
          }, 900, 'swing');
        }
        else{
          $('html, body').stop().animate({
            'scrollTop': hash.offset().top - 50
          }, 900, 'swing');
        }
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

  serverData.getAudioDesc().then(function(data){
    $scope.desc=data.data;
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
          window.scroll(0,0)
          $('#thankyou').fadeIn();
          $timeout(function(){
            window.location.reload();
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
app.directive('valTime', function(){
  return {
    require: 'ngModel',
    link: function(scope, element, attr, ngModelCtrl){
      function timeValidation(time){
        var pass=true;
        if(time!==undefined)
        {
          var AP=time.split(' ')[1];
          var time=time.split(' ')[0].split(':');

          if(AP==='AM'&&(Number(time[0])<7||Number(time[0])===12)||AP==='PM'&&(Number(time[0])>=11&&Number(time[0])!==12))
          {
            pass=false;
          } 
        }
        else
        {
          pass=false;
        }
        if(pass){
          ngModelCtrl.$setValidity('timeRange', true);
        }
        else{
          ngModelCtrl.$setValidity('timeRange', false);
        }
        return time;
      }
      ngModelCtrl.$parsers.push(timeValidation);
    }
  };
});
app.factory("serverData",function($http){

  function getLink() {
    return $http.get("data/linkData.json");
  }
  function getMember() {
    return $http.get("data/memberData.json");
  }
  function getAudio() {
    return $http.get("data/audioData.json");
  }
  function getEvent() {
    return $http.get("data/eventData.json");
  }
  function getBooking() {
    return $http.get("data/bookingData.json");
  }
  function getType() {
    return $http.get("data/typeData.json");
  }
  function getSocial(){
    return $http.get('data/socialData.json');
  }
  function getBrand(){
    return $http.get('data/brandData.json');
  }
  function getAudioDesc(){
    return $http.get('data/jukeboxDescData.json');
  }
  return {
    getLink: getLink,
    getMember: getMember,
    getAudio: getAudio,
    getEvent: getEvent,
    getBooking: getBooking,
    getType: getType,
    getSocial: getSocial,
    getBrand: getBrand,
    getAudioDesc: getAudioDesc
  }
});

app.factory("jukebox", function(){
  
  var jukebox=document.createElement("AUDIO");
  var data;
  var status=null;
  var callback;
  // Reset jubox when song ends
  jukebox.addEventListener("ended", function(){
    jukebox.src="";
    status="ready";
    callback();
  });

  function set(music,cb){
    data=music;
    status="ready";
    callback=cb;
  }
  function play(){
    jukebox.play();
    status="playing";
  }
  function pause(){
    jukebox.pause();
    status="paused";
  }
  function getStatus(){
    return status;
  }
  function playpause(id){
    if(id==undefined&&status=="ready"){
      console.error("Error: 'playpause(id)' method requires json position ID of audio");
    }
    else if(id!==undefined){
      // >>>Load Song
      jukebox.src=data[id].src;
      // >>>Play Song
      play();
    }
    else{
      switch(status)
      {
        case "playing":
          pause();
        break;
        case "paused":
          play();
        break;
        default:
          console.error("Error: null status: Use 'set()' method to add json data.")
        break;
      }
    }
  }

  return {
    set: set,
    playpause: playpause,
    status: getStatus
  }
});
