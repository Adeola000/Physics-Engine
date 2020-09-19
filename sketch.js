const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
function setup() {
  engine=Engine.create()
  world=engine.world
  box=Bodies.rectangle(200,200,10,30,{restitution:1.0})
  World.add(world,box)
  ground=Bodies.rectangle(400,380,800,20,{isStatic:true})
  World.add(world,ground)
  ball=Bodies.circle(200,100,30,{restitution:1.5})
  World.add(world,ball)
  console.log(ground)
  createCanvas(800,400);
}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
  fill("red")
  drawSprites();
  rectMode(CENTER)
  rect(box.position.x,box.position.y,10,30)
  rect(ground.position.x,ground.position.y,800,20)
  ellipse(ball.position.x,ball.position.y,30,30)
}