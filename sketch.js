let font;
let points = [];

function preload() {
  font = loadFont('https://cdn.jsdelivr.net/gh/google/fonts/ofl/raleway/Raleway-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont(font);
  textSize(128);

  let message = "Happy Birthday Winston";
  let bounds = font.textBounds(message, 0, 0, 128);
  let x = (width - bounds.w) / 2;
  let y = (height + bounds.h) / 2;

  points = font.textToPoints(message, x, y, 128, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });
}

function draw() {
  background(0, 20);
  fill(255);
  noStroke();

  for (let pt of points) {
    let jitter = random(-1.5, 1.5);
    circle(pt.x + jitter, pt.y + jitter, 2);
  }
}