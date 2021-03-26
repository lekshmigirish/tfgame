var gunImage,barricadeImg,blackoutImg,cybertronImg,ehbImg,megatronImg,nitrozuesImg,shockwaveImg,soundwaveImg,soundwaveImg,starscreamImg,tfHUDImg
var gun

function preload(){
  gunImage=loadImage('tfpics/gun.png')
  barricadeImg=loadImage('tfpics/barricade.png')
  blackoutImg=loadImage('tfpics/blackout.png')
  cybertronImg=loadImage('tfpics/cybertron.jpg')
  ehbImg=loadImage('tfpics/ehb.png')
  megatronImg=loadImage('tfpics/megatron.png')
  nitrozuesImg=loadImage('tfpics/nitrozues.png')
  shockwaveImg=loadImage('tfpics/shockwave.png')
  soundwaveImg=loadImage('tfpics/soundwave.png')
  starscreamImg=loadImage('tfpics/starscream.png')
  tfHUDImg=loadImage('tfpics/tfHUD.png')
 
}



function setup() {
  createCanvas(1500,800);
  gun=createSprite(200,200,50,50)
  gun.addImage('hero',gunImage)
gun.scale=0.5
}

function draw() {
  background(cybertronImg);  
  if (keyDown('UP_ARROW')){
    gun.y=gun.y-10
  }
  if (keyDown('DOWN_ARROW')){
    gun.y=gun.y+10
  }
  if (keyDown('LEFT_ARROW')){
    gun.x=gun.x-10
  }
  if (keyDown('RIGHT_ARROW')){
    gun.x=gun.x+10
  }


   if (keyDown('space')){
    if(frameCount%60===0){
      fill('yellow')
      var bullet=createSprite(gun.x+30,gun.y+30,20,20,10)
      bullet.addImage(ehbImg)
      bullet.velocityX=Math.random(20,30);
   }
  }
  drawSprites();

}


// fire(){

// }
// }