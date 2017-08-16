const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

import Game from './game';

$('document').ready(function(){
	const game = new Game()

	console.log(game)
})
