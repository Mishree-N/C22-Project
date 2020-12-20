//variables and constants
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	//load images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);

	//position rectangle's control to the center/middle
	rectMode(CENTER);
	
	//create sprite for the package body
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//create helicopter sprite and add it's image
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//create ground sprite for ground body
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//create engine and world
	engine = Engine.create();
	world = engine.world;

	//create package body
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//create ground body
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	//run engine
	Engine.run(engine);
  
}


function draw() {

	background(0);

	//position rectangle's control to the center/middle
	rectMode(CENTER);

	//assign x and y position of body to sprite to be able to display the body
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	//call keypressed function
	keyPressed();

	//show sprites
	drawSprites();
}



function keyPressed() {
	//when down arrow key is pressed,
	if (keyCode === DOWN_ARROW) {
		//set packageBody's gravity to 0, making it static
		Matter.Body.setStatic(packageBody, false);
		//set packageBody's restitution to 0.6, to make it bounce accordingly
		packageBody.restitution=0.6;
	}
}



