
let t = 0; 

function setup() {
  createCanvas(700, 700);
  noStroke();
  fill(40, 100, 150);
}

function draw() {
  background(10, 10); 
 
  for (let x = 0; x <= width; x = x + 20) {
    for (let y = 0; y <= height; y = y + 30) {
     
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      
      const angle = xAngle * (x / width) + yAngle * (y / height);

     
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); 
    }
  }

  t = t + 0.01; 
}

