noseX=0;
noseY=0;
nose_img=""


function preload(){
    nose_img=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    video.size(400,400);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0,0,400,400);
    image(nose_img, noseX, noseY, 70, 40);
}

function take_snapshot(){
    save("Clown_filter_image.png");
}

function modelloaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("x="+results[0].pose.nose.x);
        console.log("y="+results[0].pose.nose.y);

        noseX=results[0].pose.nose.x-35;
        noseY=results[0].pose.nose.y+20;
    }
}