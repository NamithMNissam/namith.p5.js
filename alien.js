function setup() {
  createCanvas(400, 400);
} 

function draw() {

  translate(width/2, height/2);
  
  // Face
  fill(54, 240, 256);
  ellipse(0,-120,100,60);
  ellipse(0, 0, 200, 200);
  // Left Arm
  stroke(150);
  strokeWeight(10);  
  line(-100, 80, -160, 120);
  
  // Right Arm
  line(100, 80, 160, 120);

  // Left Leg
  line(-80, 120, -120, 180);

  // Right Leg
  line(80, 120, 120, 180);

  // Joints
  fill(0);
  ellipse(-160, 120, 0, 20); // Left shoulder
  ellipse(160, 120, 0, 20); // Right shoulder  
  ellipse(-120, 180, 20, 20); // Left hip
  ellipse(120, 180, 20, 20); // Right hip

  // Hands & Feet  
  ellipse(-180, 140, 20, 20); 
  ellipse(180, 140, 20, 20);
  ellipse(-140, 210, 20, 20);
  ellipse(140, 210, 20, 20);

  // Eyes
  fill(0);
  ellipse(-25,-140,20,20);
  ellipse(25,-140,20,20);
  
  
  // Eyebrows
  noFill();
  stroke(0);
  strokeWeight(7);
  line(-50, -60, -0, -50);
  line(-0, -50, 50, -60);
  
  // Mouth
  noFill();
  stroke(100);
  strokeWeight(8);
  beginShape();
  vertex(-20,-110);
  bezierVertex(-10,-110,10,-110,20,-110);
  endShape();
  
  // Antenna
  fill(255,0,255);
  ellipse(0,-160,10,40);
  ellipse(0,-180,20,20);
  
}
