var jSon = [
              {
                "trackID": 0, 
                "trackTitle": "Ambient01", 
                "artist": "Dbris", 
                "audioType": "mpeg", 
                "directory": "audio/Ambient 01 - Dbris.mp3"
              }, 
              {
                "trackID": 1, 
                "trackTitle": "Chikyu-u 002", 
                "artist": "R.M", 
                "audioType": "mpeg", 
                "directory": "audio/R.M - Chikyu-u 002.mp3"
              },
	      {
                "trackID": 2, 
                "trackTitle": "Untitled 01", 
                "artist": "Unknown Artist", 
                "audioType": "mpeg", 
                "directory": "audio/Unknow Artist - Chikyu-u Unknown - 01 Untitled 01.mp3"
              }
             ];
  
  var trackInfo = document.getElementById("trackInfo");
  var audio = document.getElementById("currentTrack");
  var currentTrack; // initialized when first track loaded
  var index = 0; // track index, starts at 0th track

  // populate first track from JSON object array
  loadTrack(jSon);

  function loadTrack(jSon){
    for(var i in jSon){
      if(jSon[i].trackID == index){
        currentTrack = jSon[i];

	audio.src = currentTrack.directory;
  	audio.setAttribute("type", "audio/" + currentTrack.audioType);
	audio.load();

	trackInfo.innerHTML = currentTrack.trackTitle + " - " + currentTrack.artist;
      }
    }
  }

  // transport functions
  function loadPrev(){
    --index;
    
    if(index < 0){
	index = Object.keys(jSon).length - 1;
    }

    loadTrack(jSon);
    playTrack();
  }

  function loadNext(){
    ++index;

    if(index > Object.keys(jSon).length - 1){
    	index = 0;
    }

    loadTrack(jSon);
    playTrack();    
  }

  function playTrack(){
    document.getElementById("playPause").innerHTML = "pause";
    audio.play();

    // sets the playPause button to pause on next click
    document.getElementById("playPause").setAttribute("onclick", "pauseTrack()");
  }

  function pauseTrack(){
    document.getElementById("playPause").innerHTML = "play";
    audio.pause();

    // sets the playPause button to play on next click
    document.getElementById("playPause").setAttribute("onclick", "playTrack()");
  }