var playerImg, AIImg;
var player, AI;

function preload (){
  playerImg=loadImage("player.png");
  AIImg=loadImage("AI.png");
  }

function setup() {
  createCanvas(800,600);
  player=createSprite(200,200,50,50)
 AI=createSprite(400, 200, 50, 50);
player.addImage(playerImg);
AI.addImage(AIImg);
player.scale=0.25;
  AI.scale=0.25;
}





function draw() {
  background(6,25,55);  
  if(keyDown("w")){
 player.y=player.y-10

  }

  if(keyDown("s")){
    player.y=player.y+10
  }

  if(keyDown("d")){
    player.x=player.x+10
  }

  if(keyDown("a")){
    player.x=player.x-10
  }
  var angle = Math.atan2(mouseY-player.y, mouseX-player.x);
  player.rotation=angle*55
  console.log(angle) 
  drawSprites();
}

