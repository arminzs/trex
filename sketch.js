

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var balloonGroup;

var score;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(1300, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5;
  
  score=0; //starting with 0
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1.5;
  

  balloonGroup=new Group();
  
  


 
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    arrow = createArrow();
     arrow.addImage(arrowImage);
      arrow.y = bow.y;
  }
   
  
 drawBalloons();
   
  
  drawSprites();
  textSize(25);
  text("Score: "+score,400,50);
  
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}
function drawBalloons()
{
  var balloonColo=Math.round(random(1,4));
  if(frameCount%80 ==0)
    {
      switch(balloonColo)
        {
          case 1: redBalloons(); break;
          case 2: pinkBalloons(); break;
          case 3: blueBalloons(); break;
          case 4: greenBalloons(); break;
          default:break;
           
        }
          } 
}


function redBalloons()
{
  
  red_balloon = createSprite(50, Math.round(random(10,200)), 1, 1);
  balloonGroup.add(red_balloon);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1;
  red_balloon.velocityX=4;
  red_balloon.lifetime=160;
}


 function pinkBalloons()
{
  pink_balloon = createSprite(180, Math.round(random(10,200)), 10, 10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1.2;
  pink_balloon.lifetime=130;
  pink_balloon.velocityX=3;
}



function greenBalloons()
{
  green_balloon = createSprite(100, Math.round(random(10,200)), 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
  green_balloon.lifetime=130;
  green_balloon.velocityX=3;
}



function blueBalloons()
{
  blue_balloon = createSprite(140, Math.round(random(10,200)), 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale=0.1;
   blue_balloon.velocityX=2;
  blue_balloon.lifetime=125;
}
 