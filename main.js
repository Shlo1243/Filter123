noseX="";
noseY="";

function preload() {
    goggles=loadImage('https://i.postimg.cc/BbVWHn69/R.png');
}

function setup() {
    canvas=createCanvas(500,400);
    video=createCapture(VIDEO);
    video.hide();
    canvas.position(400,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('poseNet is loaded successfuly');
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
    }
}

function draw() {
    image(video,0,0,500,400);
}