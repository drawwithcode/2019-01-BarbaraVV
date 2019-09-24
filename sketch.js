
let xspacing = 10;
let w;
let theta = 0.0;
let amplitude = 75.0;
let period = 500.0;
let dx;
let yvalues;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {

  // ORIGINAL IMAGE

  // In function setup():
  // angleMode(DEGREES);
  // background("white");

  // In function draw():
  // push();
  //   translate(width/2,height/2);
  //   stroke(0);
  //   strokeWeight(0.5);
  //   noFill();
  //   line(200,0,cos(frameCount*2, frameRate(100))*200,
  //              sin(frameCount*2, frameRate(100))*200);
  //   if(frameCount==180) {
  //      noLoop();
  //   }
  // pop();

  background(0);
  calcWave();
  renderWave();
}

function calcWave() {
  theta += 0.02;

  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  noFill();

  for (let x = 0; x < yvalues.length; x++) {
    stroke(lerpColor(color("AliceBlue"), color("LightSkyBlue"), frameCount/270));
    line(x*xspacing, height/2+yvalues[x],width/2,height/2);
  }
}
