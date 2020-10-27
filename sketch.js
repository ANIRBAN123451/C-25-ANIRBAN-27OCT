//Calling Matter functions
const Engine=Matter.Engine;//provides mechanics
const World=Matter.World;//provides background
const Bodies=Matter.Bodies;//provides objects
var engine,world,box1,box2,pig1,log1,ground;
function setup() {
  createCanvas(800,800);
  //Creating our engine
  engine=Engine.create();
  //Connecting our world to our engine
  world=engine.world;
  //Creating objects

 
  //Adding objects and our world to the main world
  ground = new Ground(400,780,800,40);
  box1=new Box(200,700,20,50);
  box2=new Box(300,700,20,50);
  pig1=new Pig(250,700);
  log1=new Log(250,680,200,PI/2);
}

function draw() {
  background("white");
  //Updating the engine
  Engine.update(engine);
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
 ground.display();
}