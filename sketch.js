
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400);

  monkey=createSprite(65,330,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(250,364,500,5);
  
  bananaGroup=createGroup();
  
}


function draw() {
background("lightgreen");
 
  ground.velocityX = -3;
  if (ground.x > 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 280){
    monkey.velocityY=-7;
  }
  monkey.velocityY+=0.6;
  
  monkey.collide(ground);
  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.round(frameCount/frameRate());
  text("Survival time:"+survivalTime,10,50);
  
  spawnbanana();
  spawnobstacle();
  drawSprites();
}

function spawnbanana() {
  if (frameCount % 80 === 0) {
    banana= createSprite(600,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage("img",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -2;
    
    banana.lifetime = 250;
    bananaGroup.add(banana);
    }
  
}

function spawnobstacle(){
 if (frameCount % 300 === 0){
    obstacle= createSprite(600,100,40,10);
    obstacle.y = 357;
    obstacle.addImage("img3",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -2;
    
    obstacle.lifetime = 270; 
 }
  
}

