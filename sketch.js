var James, James_Stand1, James_Running1, James_Running2, James_Running3, James_Running4;
var James_Running5, James_Running6, James_Punch1, James_Punch2, James_Punch3, James_Punch4;
var James_Punch5, SideCharacter1, SideCharacter2;

var Gamestate = "start";
var score = 0;
var villainrunning, fireball;
var Level;
var answercheck = "  ";
var QuestionBank,Answer1,Answer2,Answer3;
var finalscore = 0;
var Beam, villain2running, villain2, Ice, villain3running, villain3;
var City, City2, City3;
var Applause, BgSound;

//load sounds and images
function preload(){
  City = loadImage("MC Images/City.jpg");
  James_Stand1 = loadImage("MC Images/CharacterStand1.png");

  City2 = loadImage("MC Images/City2.png");
  City3 = loadImage("MC Images/City3.jpeg");
  
  //loadImage("MC Images/SideCharacter.png", "MC Images/SideCharacter2.png");

  James_running = loadAnimation("MC Images/CharacterRun1.png", "MC Images/CharacterRun2.png", "MC Images/CharacterRun3.png","MC Images/CharacterRun4.png", 
  "MC Images/CharacterRun5.png", "MC Images/CharacterRun6.png");
  
  James_punching = loadAnimation("MC Images/CharacterPunch1.png", "MC Images/CharacterPunch2.png", "MC Images/CharacterPunch3.png", 
  "MC Images/CharacterPunch4.png","MC Images/CharacterPunch5.png");

  villain = loadImage("Enemy Images/Enemy1.png");
  villainrunning = loadAnimation("Enemy Images/Enemy1Walk1 copy 2.png", "Enemy Images/Enemy1Walk2.png")
  fireball = loadImage("Enemy Images/Fireball.png");
  gameoverImg = loadImage("gameover.png");

  Beam =  loadImage("Enemy Images/Beam.png");
  villain2running = loadAnimation("Enemy Images/Villain2.png")

  Ice = loadImage("Enemy Images/Ice.png");
  villain3running = loadImage("Enemy Images/Villain3Walk1.png","Enemy Images/Villain3Walk2.png");
  villain3 = loadImage("Enemy Images/Villain3Stand.png");
 
  Applause = loadSound("Applause.mp3");
  BgSound = loadSound("Background_Sound.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  Level = 1;

  //background sprite
  Background = createSprite(windowWidth/2, windowHeight/2);
  Background.addImage("City",City);
  Background.addImage("City2",City2);
  Background.addImage("City3",City3);
  Background.scale = 1.45;

  //invisible ground
  Ground = createSprite(windowWidth/2, windowHeight-35, windowWidth,10);
  Ground.visible = false;
// Main character
  James = createSprite(295,windowHeight-300,10,40);
  James.addImage("James_Stand1", James_Stand1);
  James.addAnimation("James_running",James_running);
  James.addAnimation("James_punching",James_punching);
  James.scale = 1.25;



  ObjectGroup = new Group();
  Villain1Group = new Group();
}

function draw() {
  background(255,255,255);  
  //game start
  if(Gamestate === "start" && keyDown("P")){
    Gamestate = "Play";
  
  }
  // game has 3 levels; when level become more then make it gameover
  if (Level > 3 ){
    Gamestate = "Gameover";
  }

  //End of game
  if(Gamestate === "Gameover"){
    imageMode(CENTER)
    image(gameoverImg,windowWidth/2,windowHeight/2,windowWidth-200,windowHeight-50);
    fill("white");
    textSize(30);
    textFont("Georgia")
   // playSpeech("Congratulations! You won the game.", "female", "English");
   text("Congratulations! You won the game", windowWidth/2-200,windowHeight/2);
   text("Final Score: "+ finalscore, windowWidth/2-150,windowHeight/2+150);
  }
  if(frameCount % 1000 === 0 && Gamestate === "Play"){
    Gamestate = "Quiz";
    Background.visible = false;
    James.visible = false;
    ObjectGroup.destroyEach();
    Villain1Group.destroyEach();
    Quiz();
    //score move to next level
    
  } 
  if(answercheck === "correct"){
    QuestionBank.remove();
    Answer1.remove();
    Answer2.remove();
    Answer3.remove();
    quizbg.remove();
    fill("lightblue");
    textSize(25)
    text("That's correct!", windowWidth/2-100, windowHeight/2);
    fill("darkblue");
    text("Please press 'C' to continue.", windowWidth/2-100, windowHeight/2 +100);
    //Applause.play();
  }
   else if(answercheck === "wrong"){
    fill("red");
    textSize(25)
    text("That's wrong!", 100, windowHeight/2);
  }
  if(Gamestate === "Quiz" && keyDown("C")){
    Gamestate = "Play";
    finalscore = score + finalscore;
    Level++;
    answercheck = " ";
    Background.visible = true;
    James.visible = true;
    score = 0;
  }
if(Level <= 3){
  Levelup();
}
if(Gamestate === "start"){
  textSize(30);
textFont("Comic Sans")
fill("black")
  text("Press 'P' to begin the game!", windowWidth/2-50, windowHeight/2);
}  
}






