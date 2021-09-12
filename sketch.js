var garden, rabbit;
var gardenImg, rabbitImg, edges;
var orangeLeafImg,redLeafImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  redLeafImg = loadImage("redImage.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  createObjects();
  drawSprites();
}

function createObjects() {



  var random_sprite = Math.round(random(1, 4))

  if (frameCount % 120 === 0) {
    if (random_sprite == 1) {
      var apple = createSprite(300, 30, 20, 30);
      apple.velocityY = 2
      apple.addImage(appleImg);
      apple.scale = 0.10;
      apple.x = Math.round(random(80, 300));
      apple.lifetime = 200 ;
    }
    else if(random_sprite == 2){ 

      var leaf = createSprite(200, 50, 20, 30);
      leaf.addImage(leafImg);
      leaf.scale = 0.10;
      leaf.x = Math.round(random(80, 300));
      leaf.velocityY = 2;
      leaf.lifetime = 200 ;
    }
    else if(random_sprite == 3){
      var orangeLeaf = createSprite(200, 50, 20, 30);
      orangeLeaf .addImage(orangeLeafImg);
      orangeLeaf.scale = 0.07;
      orangeLeaf.x = Math.round(random(80, 300));
      orangeLeaf.velocityY = 2;
      orangeLeaf.lifetime = 200 ;
    }
    else {
      var redLeaf = createSprite(200, 50, 20, 30);
      redLeaf .addImage(redLeafImg);
      redLeaf.scale = 0.07;
      redLeaf.x = Math.round(random(80, 300));
      redLeaf.velocityY = 2;
      redLeaf.lifetime = 200 ;
    }
  }
}
