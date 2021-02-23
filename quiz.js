function Quiz(){
    if(Gamestate === "Quiz"){
      background("purple");
      BgSound.stop();
    quizbg = createImg('Quizimage.png')
    quizbg.position(windowWidth/2-150, windowHeight/2-170);
    quizbg.size(windowWidth/2+100,windowHeight/2)
      
    question(Level);
    QuestionBank = createElement('h4');
    QuestionBank.html(Ask);
    QuestionBank.style('color','white');
    QuestionBank.position(windowWidth/2,windowHeight/2-100);
    
    Answer1 = createButton(Answer[0]);
    Answer1.position(windowWidth/2, windowHeight/2);
    Answer1.mousePressed(function(){
      //create a switch variable, populate it with correct and wrong
      if(Answer[0]=== CorrectAnswer){
        answercheck = "correct";
        score+= 80;
      }
      else{
        answercheck = "wrong" 
        score-=20;
      }
    })
    
    Answer2 = createButton(Answer[1]);
    Answer2.position(windowWidth/2, windowHeight/2+50);
    Answer2.mousePressed(function(){
      if(Answer[1]=== CorrectAnswer){
        answercheck = "correct";
        score+= 80;
      }
      else{
        answercheck = "wrong" 
        score-=20;
      }
    })
  
    Answer3 = createButton(Answer[2]);
    Answer3.position(windowWidth/2, windowHeight/2+100);
    Answer3.mousePressed(function(){
      if(Answer[2]=== CorrectAnswer){
        answercheck = "correct" 
        score+= 80;
      }
      else{
        answercheck = "wrong" 
        score-=20;
      }
    })
    
  }
  
  }
  
  function question(L){
    switch(L){
      case 1: 
      Ask = "Which system of our body controls everything we do?"
      Answer = ["Respiratory System","Nervous System","Endocrine System"];
      CorrectAnswer = "Nervous System";
      break;
      case 2:
      Ask = "The nervous system is made up of which 3 parts?"
      Answer = ["Brain,Liver,Heart","Brain,Heart,Nerves","Brain,Spinal Cord,Nerves"];
      CorrectAnswer = "Brain,Spinal Cord,Nerves";
      break;
      case 3:
      Ask = "How much does a typical adult brain weigh?"
      Answer = ["3 pounds","3 tons","3 kilograms"];
      CorrectAnswer = "3 pounds";
      break;
    }
  }
  