class Maze{
    constructor(){

    }

    display(){
    console.log("Maze here")
        var player1 = createSprite(215,570);
        player1.addImage(smileEmojiImg);
        player1.scale = 0.15;
        var wall1 = createSprite(700,100,displayWidth -500,10);
        var wall2 = createSprite(700,600,displayWidth -500,10);
        var wall3 = createSprite(270,320,10,450);
        var wall4 = createSprite(1130,380,10,450);
        var l1 = createSprite(300,175,65,7);
        var l2 = createSprite(330,217,7,90);
        var l3 = createSprite(357,260,60,7);
        var l4 = createSprite(385,285,7,55);
        var l5 = createSprite(385,313,75,7);
        var l6 = createSprite(350,353,7,85);
        var l7 = createSprite(372,394,50,7);
        var l8 = createSprite(335,455,120,7);
        var l9 = createSprite(372,515,50,7);
        var l10 = createSprite(350,530,7,35);
        var l11 = createSprite(450,490,7,65);
        var l12 = createSprite(457,357,70,7);
        var l13 = createSprite(492,357,7,85);
        var l14 = createSprite(515,397,50,7);
        var l15 = createSprite(515,317,50,7);
        var l16 = createSprite(492,500,7,90);
        image(mazeImg, 700,100,400,500)
        
        if(keyDown("r")){
            player1.x = player1.x + 5;
          }

        drawSprites();
    }
    
}