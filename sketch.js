
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var engine,world;

function preload()
{
	//hollowIMG=loadImage("Dustbin.PNG")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();

	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,650,50,50);
	ground= new Ground(500,700,1200,50);
	stick1= new Dustbin(200,600,50,180);
	stick2= new Dustbin(400,600,50,180);
	stick3= new Dustbin(300,650,150,50);

	//Engine.run(engine);
}


function draw() {
  rectMode(CENTER);

  background("cyan");
    Engine.update(engine);
    
	paper.display();
	ground.display();
	stick1.display();
	stick2.display();
	stick3.display();

  drawSprites();
 
}

function keyPressed(){
	console.log("keyPressed")
	if(keyCode === UP_ARROW){
		//console.log("up")
		Matter.Body.applyForce (paper.body,paper.body.position,{x:155, y:-155})
		//paper.isStatic= false;
	}
}

