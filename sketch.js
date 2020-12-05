
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var Ground;
var bin;

function preload(){

  binI = loadImage("dustbin.png")
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  
  bin = createSprite(570,575);
  bin.addImage("bin",binI);
  bin.scale = 1.5;

  paperBall = new paper(100,630,15);
  dust3 = new dustbin(630,585,15,120);
  World.add(world,dust3);
  dust2 = new dustbin(507,585,15,120);
  World.add(world,dust2);
  dust1 = new dustbin(570,640,100,15);
  World.add(world,dust1);
	Ground = new ground(400,650,2035563,10);
  World.add(world,Ground);
  Engine.run(engine);
  keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine)

  paperBall.display();
  Ground.display();
  dust1.display();
  dust2.display();
  dust3.display();
  drawSprites();
}    

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x : 33 , y : -33})
  }
}