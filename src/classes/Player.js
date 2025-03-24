class Player {
    constructor(name, xPosition, yPosition) {

        this.name = name;

        this.xPosition = xPosition;
        this.yPosition = yPosition;

        this.width = 10;
        this.height = 90;

        this.velocity = 5;

        this.points = 0;
    }

    isColliding(ball) {

        if(this.xPosition < ball.xPosition + (ball.diameter / 2)
            && this.xPosition + this.width > (ball.xPosition - (ball.diameter / 2))
            && this.yPosition < ball.yPosition + (ball.diameter / 2)
            && this.yPosition + this.height > (ball.yPosition - (ball.diameter / 2))){
                
            if(this.isCollidingX){
                ball.xVelocity *= -1;
            }

            if(this.isCollidingY){
                ball.yVelocity *= -1;
            }

            return true;
        }

        return false;
    };

    isCollidingX(){

        if(this.xPosition < ball.xPosition + (ball.diameter / 2)
            && this.xPosition + this.width > (ball.xPosition - (ball.diameter / 2))) {

            return true;
        }

        return false;
    }

    isCollidingY(){

        if(this.yPosition < ball.yPosition + (ball.diameter / 2)
            && this.yPosition + this.height > (ball.yPosition - (ball.diameter / 2))) {

            return true;
        }

        return false;
    }
}