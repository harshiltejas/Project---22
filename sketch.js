const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;



function setup() {
  createCanvas(800,400);
  
engine = Engine.create();
world = Engine.world;


ground = Bodies.rectangle(400,390,800,20, {isStatic : true})
//World.add(world,ground)
World.add(world,ground)

ball = Bodies.rectangle(400,200,50,50,{restitution : 0.5})
//World.add(world,ball)

}

function draw() {
  background(0); 
  
Engine.update(engine)
rectMode(CENTER)

rect(ground.position.x,ground.position.y,800,20)
rect(ball.position.x,ball.position.y,50,50)

  drawSprites();
}