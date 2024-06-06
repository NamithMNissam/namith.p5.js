function setup() {
   createCanvas(windowWidth, windowHeight);
  textSize(50);
  textAlign(CENTER, CENTER);
  fill(255);  // White text color
}

function draw() {
  background(0);  // Black background

  // Change text color based on mouseX position
  let red = map(mouseX, 0, width, 0, 255);
  fill(red, 0, 0);  // Red color that changes with mouseX
  text("Welcome to Bath Spa", width / 2, 300);
  text ("University",width/2,400);
}
