sun = ""
danger = ""

function preload()
{
    sun = loadSound("Sunflower by Post Malone.mp3")
    danger = loadSound("Whats up danger by Blackway.mp3")
}

function setup()
{
    canvas = createCanvas(600, 475);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 475);
}