function setup() {
  createCanvas(600, 600);
  noStroke();
}
function draw() {
  background(200, 0, 100);    //Purple color
  
  //neck
  fill(240,208,159);
  strokeWeight(2);
  rect(258,320,90,200);
  
  //hair1
  fill(63,43,23);
  ellipse(300,240,250,275);
  
  //head
  strokeWeight(2);
  fill(240,208,159);              // Tan color
  ellipse(300, 255, 250, 275);   // Tan circle
  
  //torso
  strokeWeight(2);
  fill(255,255,2554);
  rect(185,454, 250, 300);
  
  //jacket
  strokeWeight(2);
  fill(0,0,0);
  ellipse(180,600,180,290);
  ellipse(430,600,180,290);
  triangle(185,454,253,454,200,600);
  triangle(440,454,353,454,400,600);
  
  //chest
  strokeWeight(2);
  fill(240,208,159);
  ellipse(303,445,90,90);
  
  //ears
  strokeWeight(2);
  fill(240,208,159);
  ellipse(180,270,40,70);
  ellipse(420,270,40,70);
  
  //hair2
  strokeWeight(2);
  fill(63,43,23);
  arc(400, 160, 90, 100, 1.2, PI + QUARTER_PI, CHORD);
  triangle(390,170,425,225,425,265);
  ellipse(300,150,150,50);
  ellipse(250,174,100,30);
  triangle(176,265,176,225,210,180);
  arc(198,170,60,90,200,159.2);
  triangle(176,225,179,200,240,150);
  ellipse(280,150,150,50);
  
}
