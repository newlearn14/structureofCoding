var form,player,game;
var gamestate=0;
var playercount,database

function setup(){
  createCanvas(400,400)
  database=firebase.database()
  game=new Game()
  game.getState()
  game.start()
  
}