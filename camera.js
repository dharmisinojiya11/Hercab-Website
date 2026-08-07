const video = document.getElementById("video");

async function startCamera(){

try{

const stream = await navigator.mediaDevices.getUserMedia({
video:true
});

video.srcObject = stream;

}

catch(err){

alert("Camera permission denied.");

}

}

function capturePhoto(){

const canvas = document.getElementById("canvas");

const context = canvas.getContext("2d");

context.drawImage(video,0,0,300,220);

const image = canvas.toDataURL("image/png");

document.getElementById("photo").src=image;

document.getElementById("photo").style.display="block";

}