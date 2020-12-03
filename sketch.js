var bullet,wall,thickness;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,50);
  thickness=random(22,83);
bullet =createSprite(50,200,50,10);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
  bullet.shapeColor="blue";
 
  }

function draw() {
  background("white");  
  if(iscollided(bullet,wall))
  {
  bullet.velocityX=0;
 var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
 if(damage>10)
  {
    bullet.shapeColor=color(225,0,0);
  }
  if(damage<0 )
  bullet.shapeColor=color(0,255,0);
  }

  drawSprites();
}

function iscollided(object1,object2){
  var re=object1.x+object1.width;
  var le=object2.x;
  if(re>=le){
    return true;
  }
  else
  {return false};
}