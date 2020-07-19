var bullet, wall;
var speed, weight;
var thickness;
var height;

var bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1600,400);

  height = 400;

  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor="white";

  thickness = random(22,83);

  wall = createSprite(1520,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(0); 
  bullet.velocityX=speed;
   
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(object1,object2){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}