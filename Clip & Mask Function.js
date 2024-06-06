let img; // Variable for the image

function preload() { 
  // Load the image
  img = loadImage("AMG.jpg");
}

function setup() { 
  createCanvas(700, 700);
  background(190, 20, 20);

  // First Mask: Circle
  img.resize(200, 200);
  let maskGraphics1 = createGraphics(200, 200); // Create a graphics buffer for the mask
  maskGraphics1.fill(255); // Set the fill color to white
  maskGraphics1.circle(100, 100, 180); // Make the circle mask bigger
  img.mask(maskGraphics1); // Apply the first mask to the image
  image(img, 50, 50); // Display the image with the first mask

  // Second Mask: Triangle
  let maskGraphics2 = createGraphics(200, 200); // Create another graphics buffer for the second mask
  maskGraphics2.fill(255); // Set the fill color to white
  maskGraphics2.triangle(0, 200, 100, 0, 200, 200); // Draw a larger triangle as the second mask
  img.mask(maskGraphics2); // Apply the second mask to the image
  image(img, 300, 50); // Display the image with the second mask

  // Text: AMG
  fill(0); // Set fill color for text to black
  textSize(50); // Set text size
  textAlign(CENTER, CENTER); // Set text alignment
  text('AMG', width/2, height/2); // Display text "AMG" at the center of the canvas
}
