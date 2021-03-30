var game, form;

var database, gameState=1;

var room1, room2, room3, room4;

var player, player1, player2, player3, player4, player5, player6;

var team1 = [], team2 = [];

var score1 = 200;

var score2 = 200;

var playerCount = 0;

var machine,artillery,heavyPower, medic, rocket, force;
var armed1, armed2, armedSong;
var room1Img, room2Img, room3Img;
var shoot, machineGun,gun,akfiring;

var next, Name;

function preload() { 
  machine = loadImage("images/blah.jpg");
  artillery = loadImage("images/artillery.jpg");
  heavyPower = loadImage("images/demolisher.jpg");
  medic = loadImage("images/medic.jpg");
  rocket = loadImage("images/rocketLauncher.jpg");
  force = loadImage("images/specialforces.jpg");

  room1Img = loadImage("images/germanguns.jpg");
  room2Img = loadImage("images/akGuns.jpg");
  room3Img = loadImage("images/onlyguns.jpg");

  armed1 = loadImage("images/ArmedSeiges.png");
  armed2 = loadImage("images/HalfReady.png");
  armedSong = loadSound("sounds/warZone.mp3");

  shoot = loadSound("sounds/shooting.mp3");
  machineGun = loadSound("sounds/machine-gun.mp3");
  //gun = loadSound("sounds/gunShot.mp3");
  akfiring = loadSound("sounds/Ak-47.mp3");

}

// game state 1 means first stage
// game state 2 means second stage
// game state 3 means match started 
// game state 0 means match over

function setup() {
  createCanvas(1600,750);

    database = firebase.database();
    console.log("game started");

  //room1 = createSprite(500,500,50,50);
  
  next = createButton("Start [PRESS space]")
  next.position(700, 700);
  console.log("next button")
  Name = createInput("Enter your Name")
  Name.position(500,500)
  console.log("input name")

}

function draw() {

    if (gameState === 1) {
      background(armed1);
      Name.hide();
      console.log("game state 1")
    }else if (gameState === 2) {
      background(armed2);
      console.log("game state 2/1")
      next.hide();
      game = new Game()
      game.getState();
      game.start();
      console.log("game state 2/2")
    }
    console.log(gameState)

    

    drawSprites();

}

function keyPressed() {
  if (keyCode === 32 && gameState === 1) {
    game.update(2)
  }
}