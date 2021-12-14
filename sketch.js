let video, poseNet;
let results = [];
let options = {
  flipHorizontal: true,
};

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  video = createCapture(VIDEO);
  video.size(width, height);
  background(0);

  poseNet = ml5.poseNet(video, options, () => console.log("Loaded"));
  poseNet.on("pose", (data) => (results = data));
  video.hide();
}

function draw() {
  // tint(255, 255, 255, 200)
  // image(video, 0, 0, width, height);
  fill(255);
  // background(255)
  drawSketch();
}

function drawSketch() {
  for (let i = 0; i < results.length; i++) {
    let skeleton = results[i].skeleton;

    for (let j = 0; j < skeleton.length; j++) {
      let x = skeleton[j][0];
      let y = skeleton[j][1];

      stroke(random(255), random(30));
      strokeWeight(3);

      line(x.position.x, x.position.y, y.position.x, y.position.y);
    }
  }
}
