const video = document.querySelector('video');
//can play event
video.addEventListener('canplay',function(){
    console.log("canplay");
});
//play event
video.addEventListener('play',function(){
    console.log("play");
});
//playing event
video.addEventListener('playing',function(){
    console.log("playing");
});
//pause event
video.addEventListener('pause',function(){
    console.log("pause");
});
//ende event
video.addEventListener('ended',function(){
    console.log("Thanks for watching ");
});
//Volume change  event
video.addEventListener('volumechange',function(){
    console.log("Volume ");
});
