
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  sprite0=loadImage("sprite_0.png");
  sprite_1=loadImage("sprite_1.png");
   sprite_2=loadImage("sprite_2.png");
   sprite_3=loadImage("sprite_3.png");
   sprite_4=loadImage("sprite_4.png");
   sprite_5=loadImage("sprite_5.png");
   sprite_6=loadImage("sprite_6.png");
   sprite_7=loadImage("sprite_7.png");
   sprite_8=loadImage("sprite_8.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log=(ground.x);
  
  obstacleGroup=createGroup();
  bananaGroup=createGroup();

  
}


function draw() {
  if(keyDown("space")&&monkey.y>=100){
    monkey.velocityY=-12;
    
     }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);

  
}

function banana(){
  var banana=createSprite(200,300,10,10);
  banana.y=Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale=0.5;
  banana.lifetime=200;
  
  bananaGroup.add(banana);
  
}

function obstacle(){
  var obstacle=createSprite(600,165,10,40);
  obstacle.scale=0.5;
  obstacle.velocityX=-3;
  obstacleGroup.add(obstacle);
  
}






