const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  boggie1 = new Boggie(50,170,50,50);
  boggie2 = new Boggie(150,170,50,50);
  boggie3 = new Boggie(250,170,50,50);

  chain1 = new Chain(boggie1.body,boggie2.body);
  chain2 = new Chain(boggie2.body,boggie3.body);

  rock = new Rock(1100,200,100,100);

}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  ground.show()
  boggie1.show()
  boggie2.show()
  boggie3.show()
  chain1.show()
  chain2.show()
  rock.show()
 
  var collision=Matter.SAT.collides(boggie3.body,rock.body);
  if(collision.collided){
    crashSound.play();
    textSize(30);
    fill("blue");
    text("CRASH",500,200);
  }

  }

  function keyPressed(){
    if (keyCode===RIGHT_ARROW){
      Matter.Body.applyForce(boggie3.body,{x:boggie3.body.position.x, y:boggie3.body.position.y},{x:0.5,y:0});
      trainSound.play();
    }
  }

  
