var bunnyimg
var wolfimg
var bunny
var wolf 
var backgroundimg
var background
var birdimg
var stumpimg
var ground
var obstacleGroup

function preload(){
    bunnyimg = loadImage ("Bunny.png");
    wolfimg = loadAnimation("wolf 1.png", "wolf 2.png", "wolf 3.png");
    backgroundimg = loadImage ("bg.jpg");
    stumpimg = loadImage ("tree stump.jpg")
    birdimg = loadImage ("bird.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 bg = createSprite(width/2, height/3);
 bunny = createSprite(width/3, height - height/6);
 wolf = createSprite(width - width/4, height - height/5);
 ground = createSprite (width/2, height -5 , width, 10);
 ground.visible = false;
 bg.addImage("bgLabel", backgroundimg)
 bunny.addImage("bunnyLabel", bunnyimg);
 wolf.addAnimation("wolfLabel", wolfimg);
 wolf.scale = 0.7;
 bg.scale = 1.7;
 obstacleGroup = createGroup()
}

function draw() { 
 background("white")

 bg.velocityX = 4;
 if(bg.x>width - width/3){
    bg.x= width/2;
 }

 if(keyDown("space") && bunny.y >= height/2){
    bunny.y = bunny.y - 30
 } 
 
 bunny.velocityY = 4;
 bunny.collide(ground);
 
 if(obstacleGroup.isTouching(bunny)){
    bg.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.destroyEach()
    text("Game Over!", width/2, height/2)
 }


 obstacles()
 drawSprites()
}

function obstacles(){
    if(frameCount%120 == 0){
    stump = createSprite(0, height-30)
    stump.addImage("stumpLabel", stumpimg)
    stump.scale = 0.3
    stump.velocityX = 4;
    obstacleGroup.add(stump);
    }
}

