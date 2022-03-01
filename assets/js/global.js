console.log('testing');

// play video
var playVideo = (e)=>{
    let id = e.target.parentNode.id
    let button = document.getElementById(id);
    let video = e.target.parentNode.nextElementSibling.id;
    let audioBtn = document.getElementById('bt_mute');
    // console.log(e.target.parentNode.nextElementSibling.id)
    button.style.display = 'none';
    audioBtn.style.opacity = 1;
    document.getElementById(video).play();
}

const spokeVideo = document.getElementById('spokeVideo');
var muteVideo = () => {
  spokeVideo.muted == true ? mute() : unmute();
}

let mute = () => {
  audioBtn = document.getElementById('audioBtn');
  audioBtn.classList.remove('fa-volume-mute')
  audioBtn.classList.add('fa-volume-up')
  spokeVideo.muted = false
}
let unmute = () => {
  audioBtn = document.getElementById('audioBtn');
  audioBtn.classList.add('fa-volume-mute')
  audioBtn.classList.remove('fa-volume-up')
  spokeVideo.muted = true
}
