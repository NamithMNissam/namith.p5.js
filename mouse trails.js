function setup() {
  createCanvas(600, 600);
  background(15);
}

function draw() {
  // Generate random bright color for each ellipse
  let r = random(20, 255); // Bias towards higher red values
  let g = random(20, 255); // Bias towards higher green values
  let b = random(20, 255); // Bias towards higher blue values
  
  // Set the trail color with less transparency
  fill(r, g, b, 150); // Adjust the alpha value for less transparency
  
  // Draw an ellipse at the current mouse position
  ellipse(mouseX, mouseY, 50, 50); // Larger ellipse for more visual impact
}
