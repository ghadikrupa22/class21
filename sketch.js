const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var up;
var leftt;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

 var option={
   restitution:.9
 }

 ball = Bodies.circle(200,200,20,option)
 World.add(world,ball)

 up = createImg("up.png")
 up.position(50,50)
 up.size(50,50)
 up.mouseClicked(vforce)


 leftt = createImg("right.png")
 leftt.position(300,50)
 leftt.size(50,50)
 leftt.mouseClicked(hforce)


 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20,20)
  Engine.update(engine);
}

function hforce(){
Body.applyForce(ball,{x:0,y:0},{x:.05,y:0})
}


function vforce(){
Body.applyForce(ball,{x:0,y:0},{x:0,y:-.05})
}

