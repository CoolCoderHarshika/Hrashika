const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,objects;




function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  objects=Bodies.rectangle(200,390,40,80);
  World.add(world,objects);
}

function draw() {
  background("blue")
  Engine.update(engine)
  rectMode("center");
  rect(400,200,40,80);
}