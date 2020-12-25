
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,250,200,20);

	bobdiameter = 20;
	bobstartpositionX = width/2;
	bobstartpositionY = height/4 + 200;

	bob1 = new Bob(400, bobstartpositionY, bobdiameter,);
	bob2 = new Bob(bobstartpositionX-bobdiameter, bobstartpositionY, bobdiameter);
	bob3 = new Bob(bobstartpositionX-bobdiameter, bobstartpositionY, bobdiameter);
	bob4 = new Bob(bobstartpositionX+bobdiameter, bobstartpositionY, bobdiameter);
	bob5 = new Bob(bobstartpositionX+bobdiameter, bobstartpositionY, bobdiameter);

	rope1 = new Rope(bob1.body, roof1.body, 0*2, 0);
	rope2 = new Rope(bob2.body, roof1.body, -bobdiameter*1, 0);
	rope3 = new Rope(bob3.body, roof1.body, -bobdiameter*2, 0);
	rope4 = new Rope(bob4.body, roof1.body, bobdiameter*1, 0);
	rope5 = new Rope(bob5.body, roof1.body, bobdiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob3.body, bob3.body.position, {x: -10, y: -10});
		Matter.Body.applyForce(bob3.body, bob3.body.position, {x: 0, y: -0});
	}

}