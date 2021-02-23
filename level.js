function Levelup(){
    
   if(Gamestate === "Play"){
     BgSound.loop();

    if(Level === 2){
      Background.changeImage("City2",City2);
      Background.scale=3.0;
    }
    if(Level === 3){
     Background.changeImage("City3",City3);
     Background.scale= 5.6;
   }

     James.changeAnimation("James_running",James_running);
   
     Background.velocityX = -2
     if(Background.x<350){
       Background.x = windowWidth/2;
     }

     if(keyDown((UP_ARROW)|| touches.length>0) && James.y>windowHeight-100){
       James.velocityY = -17;
       touches = []
     }
     James.velocityY= James.velocityY+0.8;
   
     if(James.isTouching(ObjectGroup)){
      Gamestate = "End";
      James.velocityY = -17;
     }
    //individually destroy the villan
     for(var i=0; i< Villain1Group.length;i++){
       if(James.isTouching(Villain1Group.get(i))){
         James.changeAnimation("James_punching",James_punching);
         score+=50;
         Villain1Group.get(i).destroy();
   
        }
   
    }
     spawnObject();
     spawnVillain1();
   }
   James.collide(Ground);
   drawSprites();
   
     
   if(Gamestate === "End"){
     Background.velocityX = 0;
     //changeimage
     ObjectGroup.setVelocityXEach(0);
     ObjectGroup.setLifetimeEach(-1);
     Villain1Group.setVelocityXEach(0);
     Villain1Group.setLifetimeEach(-1);
     textSize(30);
     textFont("Comic Sans");
     fill("Brown");
     text("Press 'R' to restart the level!", 150,200);
    
     score = 0;
     James.velocityY = 0;
     James.changeImage("James_Stand1", James_Stand1);

   }
  
   if(keyDown("R")&& Gamestate === "End"){
     Gamestate = "Play";
     
     ObjectGroup.destroyEach();
     Villain1Group.destroyEach();
   }
 
   textSize(30);
   textFont("Comic Sans")
   fill("black")
   text("Score: " + score, 100, windowWidth - 500);  
     }
   