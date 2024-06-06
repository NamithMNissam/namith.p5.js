let numX, numY;
let modSize;

function setup() {
  let cnv = createCanvas(400, 400);
  colorMode(HSB, 120, 10, 110, 10);
  background(0, 0, 100); // Background Color in HSB
  noStroke();
  numX = 8;
  numY = 12;
  modSize = 400 / 8; // Adjust this value to control object size
}

function draw() {
  background(0, 0, 10);
  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {
      push();
      translate(x * modSize + modSize / 2, y * modSize + modSize / 2);
      let shapeChoice = int(random(3)); // Choose between 3 shapes

      switch (shapeChoice) {
        case 0:
          fill(320, 60, 100);
          ellipse(0, 0, modSize * 2 / 3 * 0.8, modSize * 2 / 3 * 0.8); // Draw smaller circle
          break;
        case 1:
          fill(45, 100, 100);
          square(-modSize / 2 * 0.3, -modSize / 2 * 0.6, modSize * 0.5); // Draw smaller square
          break;
        case 2:
          fill(25, 95, 100);
          let triHeight = modSize * sqrt(3) / 2 * 0.8; // Calculate smaller triangle height
          triangle(-modSize / 2 * 0.6, modSize / 2 * 0.8, modSize / 2 * 0.4, modSize / 2 * 0.4, 0, triHeight); // Draw smaller upward-pointing triangle
          break;
      }
      pop();
    }
  }
  noLoop(); // Stops drawing after first frame
}

function mousePressed() {
  loop();
}

function windowResized() {
  resizeCanvas(400, 400);
}
