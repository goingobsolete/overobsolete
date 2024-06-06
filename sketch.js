let brushSizeX = 10;
let brushSizeY = 30
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

}

function draw() {
  // Set the brush color to black
  fill(random(255),random(255),random(255));
  noStroke();
  // brushSizeX = random(50);
  // brushSizeY = random(50);
  brushSizeX = 10 + random(30);
  // brushSizeY = ÷50;
  
  
  // Draw a circle at the mouse position to reveal the text
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, brushSizeX, brushSizeX*3);
      if (frameCount % 1 < 1) {
        push();
        textSize(random(200));
        textFont('Helvetica');
        // textAlign(CENTER, CENTER);
        stroke(0);
        strokeWeight(3);
        fill(255);
        text("obsolete", random(width), random(height));
        pop();
    }
  }
}