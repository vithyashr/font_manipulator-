nose_x = 0
nose_y = 0

l_wrist = 0
r_wrist = 0

difference = 0

function preload() {

}

function setup() {

    camera = createCapture(VIDEO)
    camera.size(550, 550)
camera.position(10 , 100)
    canvas = createCanvas(400, 450)
    canvas.position(800, 120)

    poseNet = ml5.poseNet(camera, modelLoaded)
    poseNet.on('pose', gotPoses)

}

function modelLoaded() {

    console.log("posenet is initialized")
}

function gotPoses(results) {

    if (results.length > 0) {

        console.log(results)

        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y

        l_wrist = results[0].pose.leftWrist.x
        r_wrist = results[0].pose.rightWrist.x


        difference = floor(l_wrist - r_wrist)

    }
}

function draw() {

    background("#9be0ad")
    document.getElementById("square_side").innerHTML = "Font size of the text will be : " + difference + " px"
    fill("#28ed53")
    stroke("#077a20")
    textSize(difference)
    text("Ananya", nose_x,nose_y);
}