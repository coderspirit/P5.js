var playerObject;
var enemyObject,canvas;
var counter=0;
function preload(){
  loadImages();
  loadSongs();    

}
function setup(){
    canvas=createCanvas(gameConstants.WIDTH,gameConstants.HIGHT);
    canvas.position(350,80);
    canvas.class("can");
    playerObject=new Player();
    enemyObject=new Enemy();
    bgsong.loop();
}
function keyPressed(){
    if(keyCode==gameConstants.SPACE_KEY){
     playerObject.jumpPlayer();
        }
}

function iscollide(){
 var xDistence=Math.abs(playerObject.x-enemyObject.x);
var yDistence=Math.abs(playerObject.y-enemyObject.y);
    return xDistence<=(playerObject.w-50) && yDistence<=(playerObject.h-50);
}
function gameScore(){
counter+=1;    
textSize(25); 
text("Score:" +counter,580,55);
}
function Gameover(){
  fill("black");
    textSize(40);
    text("Game over",220,200);
    noloop();
    
    
}
function gameStatus(){
    if(iscollide()){
         drawblastImage();
          bgsong.stop();
         Gameover();
        }
}
function drawblastImage(){
    image(blastImage,60,250,140,140);
}
function draw(){
    background(bg);
    playerObject.drawPlayer();
    playerObject.fallPlayer();
    enemyObject.drawEnemy();
    enemyObject.moveEnemy();
    gameScore();
    gameStatus();
   
    
    
}

