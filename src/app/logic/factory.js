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
  return {
    getLink: getLink,
    getMember: getMember,
    getAudio: getAudio,
    getEvent: getEvent,
    getBooking: getBooking,
    getType: getType
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
