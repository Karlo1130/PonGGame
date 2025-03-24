function setup() {
    createCanvas(canvasWidth, canvasHeight + 100);
    strokeWeight(0);
}

function draw() {
    background(50);

    Draw.drawBall(ball);

    players.forEach((player)=>{
        Draw.drawPlayer(player);

    });

    Draw.drawPoints(players);

    players.forEach((player) => {
        if(player.points == 3){
            Draw.drawWinScreen(player);
        }
    })
    
    update();
}

function update() {

    players.forEach((player) => {
        if(player.points == 3){
            ball.xVelocity= 0;
        }
    });

    ball.xPosition += ball.xVelocity;
    ball.yPosition += ball.yVelocity;

    players.forEach((player) => {
        if(player.isColliding(ball)) {
            matchCollisions++;

            if(matchCollisions == 3){
                ball.xVelocity *= 2;
            }

            if(matchCollisions == 5){
                ball.xVelocity *= 2;
            }
        }

        if(player.yPosition <= 0) {
            player.yPosition += player.velocity;
        }

        if(player.yPosition + player.height >= 400) {
            player.yPosition -= player.velocity;
        }

    });

    if (keyIsDown(87)) {
        players[0].yPosition -= players[0].velocity;
    }

    if (keyIsDown(83)) {
        players[0].yPosition += players[0].velocity;
    }

    if (keyIsDown(UP_ARROW)) {
        players[1].yPosition -= players[1].velocity;
    }

    if (keyIsDown(DOWN_ARROW)) {
        players[1].yPosition += players[1].velocity;
    }
        
    if((ball.yPosition + (ball.diameter / 2) >= 400)
        || (ball.yPosition - (ball.diameter / 2) <= 0)){
        
        ball.yVelocity *= -1;
    }

    if((ball.xPosition + (ball.diameter / 2) >= 600)
        || (ball.xPosition - (ball.diameter / 2) <= 0)){
        
        if(ball.xVelocity > 0) {
            players[0].points++;
        } else {
            players[1].points++;
        }


        ball.xPosition = canvasWidth / 2;
        ball.yPosition = canvasHeight / 2;
        
        matchCollisions = 0;
        ball.xVelocity = 5;

        if (Math.floor(Math.random() * 2) == 0){
            ball.xVelocity *= -1;
        } 

    }
    
}
