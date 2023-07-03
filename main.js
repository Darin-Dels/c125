noseX = 0;
noseY = 0;

function preload()
{
    filter_img = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log('PoseNet is initialised');
}

function gotPoses(results)
{
    if (results.length > 0) 
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y+3;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(filter_img, noseX, noseY, 50, 30)
}

function take_snapshot()
{
    save('MyFilteredImage.png');
}