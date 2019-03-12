//Variables
var bombs, GraySquares = [], WhiteSquareX = [], WhitheSquareY = [], WhiteSquaresCounter = 0,
x = 0, y = 0;


function setup() {

    createCanvas(641,641);
    background(255,186,120);

    for(i = 0; i<8; i++){
        for(j = 0; j<8; j++){

            WhiteSquareX[WhiteSquaresCounter] = x;
            WhitheSquareY[WhiteSquaresCounter] = y;
            x+=80;
            if(x==640)
                x = 0;
            WhiteSquaresCounter++;

        }
        
        y+=80;

    }

    for(WhiteSquaresCounter = 0; WhiteSquaresCounter < 64; WhiteSquaresCounter++){
        fill(232);
        rect(WhiteSquareX[WhiteSquaresCounter],WhitheSquareY[WhiteSquaresCounter],80,80);
    }

}

