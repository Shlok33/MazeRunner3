class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton("Reset");
    this.button2 = createButton('Start Game')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.button2.hide();
  }

  display(){
    this.button2.hide();
    this.title.html("Maze Runner");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100, 20);
    this.button2.position(displayWidth/2 - 50, displayHeight/3);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
     var playername = this.input.value();
    /*  playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);*/
      this.greeting.html("Hello " + playername)
      this.button2.show();
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    })
    
    this.button2.mousePressed(()=>{
      form.hide();
      maze = new Maze();
      maze.display()
    })
  }
}
