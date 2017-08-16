import Paddle from './Paddle'
import Ball from './Ball'
import Brick from './Brick'

class Game {
	constructor(level = 0, score = 0, paddleSize = 100, ballSpeed = 10) {
		this.level = level;
		this.score = score;
		this.paddle = new Paddle(paddleSize)
		this.ball = new Ball(ballSpeed)
	}
}

module.exports = Game;