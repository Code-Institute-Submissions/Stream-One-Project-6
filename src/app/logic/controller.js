app.controller("navbar",function($scope, serverData){
  // >Generate site wide nav links
  serverData.getLink().then(function(data){
    $scope.data=data.data;
  },function(err){
    console.error(err);
  });
});

app.controller("memberList",function($scope, serverData){
  // >Generate member list
  serverData.getMember().then(function(data){
    $scope.data=data.data;
  },function(err){
    console.log(err);
  });
});

app.controller("audioCtl",function($scope, serverData,jukebox){
  // >Generate audio list
  serverData
  .getAudio()
  .then(function(data){
    $scope.data=data.data;

    // >>Set Audio Player
    jukebox.set(data.data,finished);

    // >>Playback control
    $scope.playback=function(id){
      if(id==undefined){
        console.error('Playback source undefined (needs id)');
        return;
      } 

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
          .slideDown();

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

app.controller("event",function($scope, serverData){
   serverData.getEvent().then(function(data){
    $scope.data=data.data;
  },function(err){
    console.log(err);
  });
})