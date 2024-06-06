function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(204);
  fill(255,0,0);
  //red light indicator
  rect(92,350,50,30);
  fill(225,250,0);
  //yellow light indicator
  rect(600,350,8,30);
  fill(0);
  //left tyre
  ellipse(200,400,100,100);
  //right tyre
  ellipse(500,400,100,100);
  fill(100,150,200);
  //car frame starts from here
  beginShape();
  vertex(100,300);
  vertex(250,300);
  vertex(250,300);
  vertex(400,200);
  vertex(500,300);
  vertex(600,300);
  vertex(600,400);
  vertex(100,400);
  vertex(100,300);
  endShape();
}
