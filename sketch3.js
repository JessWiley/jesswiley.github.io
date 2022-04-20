
let symmetry = 5;   

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;

function setup() { 
  createCanvas(710, 710);
  angleMode(DEGREES);
  background(100);

  
  saveButton = createButton('journal');
  saveButton.mousePressed(saveFile);

  
  clearButton = createButton('retry');
  clearButton.mousePressed(clearScreen);

  
  fullscreenButton = createButton('close-up');
  fullscreenButton.mousePressed(screenFull);

 
  brushSizeSlider = createButton('pen tip');
  sizeSlider = createSlider(1, 32, 4, 0.1);
}


function saveFile() {
  save('design.jpg');
}


function clearScreen() {
  background(127);
}


function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}