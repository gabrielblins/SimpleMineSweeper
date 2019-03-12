//Variables
var bombs, GraySquares = [], WhiteSquareX = [], WhitheSquareY = [], WhiteSquaresCounter = 0, WhiteSquareIsClicked = [], 
mouseIsClicked = false, x = 40, y = 40;


function setup() {

    createCanvas(641,641);
    background(255,186,120);
    rectMode(CENTER);

    for(i = 0; i<8; i++){
        for(j = 0; j<8; j++){

            WhiteSquareX[WhiteSquaresCounter] = x;
            WhitheSquareY[WhiteSquaresCounter] = y;
            x+=80;
            if(x > 600)
                x = 40;
            WhiteSquaresCounter++;
            
        }

            y+=80;

    }

    for(k = 0; k < 64; k++)
        WhiteSquareIsClicked[k] = false;

}

function draw() {

    for(WhiteSquaresCounter = 0; WhiteSquaresCounter < 64; WhiteSquaresCounter++){

        if(mouseIsPressed && dist(mouseX,mouseY,WhiteSquareX[WhiteSquaresCounter],WhitheSquareY[WhiteSquaresCounter]) < 40)
            WhiteSquareIsClicked[WhiteSquaresCounter] = true;
        
        if(WhiteSquareIsClicked[WhiteSquaresCounter])
            fill(132);
        else
            fill(232);

        rect(WhiteSquareX[WhiteSquaresCounter],WhitheSquareY[WhiteSquaresCounter],80,80);

    }

}

