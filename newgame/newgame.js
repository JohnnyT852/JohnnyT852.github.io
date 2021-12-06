var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState="L1";
var squares=1;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(220);
  if(gameState=="L1"){
  levelOne();
  }
  if (gameState=="L2"){
    levelTwo();
    
// for (let i = 0; i < square; i++) {
  rect(random(width),random(height),30,30);
//}
  }
   if(gameState=="L3"){
    levelThree();
  }
  
  
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
  gameState="L2";
  
  }
  
   ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
} // end level one


function levelTwo(){
  frameRate(10);
  background(0,100,200);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
    if(mouseIsPressed){
      score=score*2;
    }
  }
  for (let i = 1; i < square; i++) {
  rect(random(width/2),random(height/2),40,40);
}
  if(score>10){
  gamestate="L3";
  }
  
   ellipse(ballx, bally, ballSize, ballSize);
} // end level two


function levelThree(){
  background(0,100,200);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>50){
    gameStatus="Win";
  }
   ellipse(ballx, bally, ballSize, ballSize);
   ballSize=ballSize -1;
} // end level three


function levelFour(){
  background(0,100,200);
  text("Level 4", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>49){
    gameStatus="Win";
  }
   ellipse(ballx, bally, ballSize, ballSize);
   ballSize=ballSize -1;
} // end level youwin
