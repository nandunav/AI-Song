song = "";
song1 = "";

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload()
{
    song = loadSound('Shape Of You.mp3');
    song1 = loadSound('harry potter 1 theme song.mp3');
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}