believer = "";
bones = "";
function preload() {
    believer = loadSound("Believer.mp3");
    bones = loadSound("Bones.mp3");
}
function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 500, 400);
}
function play() {
    believer.play();
}