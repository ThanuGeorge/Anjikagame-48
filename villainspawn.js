function spawnVillain1() {

    //write code here to spawn the villain
    if (frameCount % 150 === 0) {
      var villain1 = createSprite(windowWidth,windowHeight-40,50,50);
      villain1.y = Math.round(random(windowHeight-70,windowHeight-50));
      
     if(Level === 1){
        villain1.addAnimation("villainrunning", villainrunning);
        villain1.scale = 0.5;
     }
    
     if(Level === 2){
       villain1.addAnimation("villain2running", villain2running);
       villain1.scale = 1.5;
     }

      if(Level === 3){
       villain1.addAnimation("villain3running", villain3running);
     }
      /*switch(Level){
        case 1:
          villain1.addAnimation("villainrunning", villainrunning);
          villain1.scale = 0.5;

          break;
          case 2:
            villain1.addAnimation("villain2running", villain2running);
           
            break;
            case 3:
          villain1.addAnimation("villain3running", villain3running);
          break;  
      }
     */ 
    // villain1.scale = 0.5;
      villain1.velocityX = -2;
      
       //assign lifetime to the variable
      villain1.lifetime = windowWidth/2;
      
       
      //add each cloud to the group
      Villain1Group.add(villain1);
    }
  }
  