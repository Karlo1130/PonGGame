class Draw{
    static drawPlayer(player) {
        fill(255);
            rect(
                player.xPosition,
                player.yPosition,
                player.width,
                player.height
            );
        }

    static drawBall(ball) {
        fill(255);

        circle(
            ball.xPosition,
            ball.yPosition,
            ball.diameter
        );

    }

    static drawWinScreen(player){
        fill(0);
        rect(0, 0, canvasWidth, canvasHeight);

        fill(255);
        textSize(22)
        text(`Felicidades \"${player.name}\" Has ganado`, (canvasWidth/4) - 10, canvasHeight/2);
        textSize(15)
        text("Presione F5 para jugar otra partida", (canvasWidth / 3) - 10, (canvasHeight /2) + 30)
    }

    static drawPoints(players) {
        fill(150);
        rect(0, 400, canvasWidth, 100);

        fill(255);
        textSize(90);
        text(`${players[0].points}`, 10, 480);
        text(`${players[1].points}`, 540, 480);
        
        textSize(20);
        text("La partida termina a los 3 puntos", (canvasWidth/4), 480);

    }
}