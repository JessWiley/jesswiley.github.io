let Lighthouse02;
function preload() {
  Lighthouse02 = loadImage("https://i.imgur.com/LupGKJX.jpg");
}
function setup() {
  createCanvas(600, 1200);
  Lighthouse02.loadPixels();
  background(0);
  noStroke();
  rectMode(CENTER);
}
function draw() {
  fill(Lighthouse02.get(mouseX, mouseY), 0);
  rect(mouseX, mouseY, 5, 10);
  
}