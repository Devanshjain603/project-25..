
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ground1;
var paperobject;
function preload(){
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(600,590,1200,20);

	dustbin1=new Dustbin(850,560,300,20)
	dustbin2=new Dustbin(700,450,20,200)
	dustbin3=new Dustbin(1000,450,20,200)

	paperobject=new Paper(200,200,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperobject.display();
  keypressed();
  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:6,y:-8});
	}
}

