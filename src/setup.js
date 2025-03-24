const canvasWidth = 600;
const canvasHeight = 400;

var matchCollisions = 0;

const players = [
    new Player("Player 1", 10, 20),
    new Player("Player 2", 580, 20)
];

const diameter= 20;
const ball = new Ball(
    (canvasWidth/ 2),
    (canvasHeight/ 2),
    diameter
);