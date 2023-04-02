Status = "";

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function start(){
    object_Detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_value = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("⭐🙂! Model Loaded !🙂⭐");
    Status = true;
}

function draw(){
    image(video, 0, 0, 300, 300);
}