const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// play and pause video
// with the inclusion of the html video tag, we have an api we can use on it which includes video.paused, video.play(), video.pause() methods
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

// update play / pause icons
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = "<i class='fas fa-hand-point-right fa-2x'></i>";
    } else {
        play.innerHTML = "<i class='fas fa-pause fa-2x'></i>";
    }
}

// update progress and timestamp
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;

//timestamp Progress
    // minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        min = '0' + String(mins);
    }
    //seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}

// set video time to progress
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration / 100);
}

// stop video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

// event listeners on video box itself
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

// event listeners on buttons
play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
