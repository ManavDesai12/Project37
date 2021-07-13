var canva;
var playerCount, database, quiz, question, contestant;
var gameState;

function setup(){

  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz = new Quiz();

  quiz.getState();
  quiz.start();


}


function draw(){
  background("pink");

  
}
