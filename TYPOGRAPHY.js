var word = "BATHSPA UNIVERSITY";



 function setup() { 



createCanvas(600, 400); 

background(255); // canvas bg color
   fill("#CE925D"); // text color
   textSize(48); 
   textAlign(CENTER);

 text(word, width/2, height/2 - 30); 
text(textWidth(word), width/2, height/2 + 30); 

}
