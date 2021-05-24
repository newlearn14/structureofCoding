class Form{
    constructor(){
     
    }
    display(){
   var title=createElement('h2')
   title.html("CarRacing Game")
   title.position(130,0)
   var input=createInput("name")
   var button=createButton("play")
   button.mousePressed(function(){
   input.hide();
   button.hide();
   var name=input.value();
   var greeting=createElement('h3')
   greeting.html("hello"+ name)
   
    })


    }
}