let Lighthouse02;
function preload() {
  Lighthouse02 = loadImage("https://i.imgur.com/6PX8qN1.jpg");
}
function setup() {
  createCanvas(600, 1200);
  Lighthouse02.loadPixels();
  background(0);
  noStroke();
  rectMode(CENTER);
}
function draw() {
  fill(Lighthouse02.get(mouseX, mouseY), 128);
  rect(mouseX, mouseY, 40, 10);
  
}