var boy;

function preload() {
 // boyImg = loadImage("")

 wallImg = loadImage("brick.png");
 wallImg1 = loadImage("brick1.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  boy  = createSprite(200, 200, 30, 50);
  

  wall1 = createSprite(200, 10, 250, 5);
  wall1.addImage("brick1", wallImg1)
  wall1.scale = 0.7;
  
  wall2 = createSprite(325, 135, 5, 250);
  wall2.addImage("brick", wallImg)
  wall2.scale = 0.7
  
  wall3 = createSprite(460, 250, 250, 5);
  wall3.addImage("brick1", wallImg1)

} 

function draw() {
  background(51);
  drawSprites();
  }