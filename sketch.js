
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone;
var slingshot;
var m2, m3, m4, m5, m6, m7, m8, m9;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  mango1=new mango(1100,100,30);
  m2 = new mango(1150, 220, 30);
  m3 = new mango(1250, 220, 30);
  m4 = new mango(1050, 200, 30);
  m5 = new mango(1000, 100, 30);
  m6 = new mango(1200, 120, 30);
  m7 = new mango(900, 200, 30);
  m8 = new mango(970, 250, 30);
  m9 = new mango(1100, 30, 30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone = new Stone(240, 420, 20);

	slingshot = new Slingshot(stone.body, {x:240, y:420});
	World.add(world, slingshot);
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  textSize(20);
  text("Drag the stone and release to launch it towards the mango tree. Press Space to resest the stone!", 50, 50);  

  treeObj.display();
  mango1.display();
  stone.display();
  slingshot.display();

  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();

  groundObject.display();

  // call the detect collision function
  detectcollision(stone, mango1);
  detectcollision(stone, m2);
  detectcollision(stone, m3);
  detectcollision(stone, m4);
  detectcollision(stone, m5);
  detectcollision(stone, m6);
  detectcollision(stone, m7);
  detectcollision(stone, m8);
  detectcollision(stone, m9);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function detectcollision(lstone, lmango){

  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(stone.body);
  }
}