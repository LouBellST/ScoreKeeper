p1 = {
	score: 0,
	one: document.querySelector('#one'),
	display: document.querySelector('#score1')
}

p2 = {
	score: 0,
	two: document.querySelector('#two'),
	display: document.querySelector('#score2')
}

const reset = document.querySelector('#reset');
const max = document.querySelector('#max');
let isGameOver = false;

function Scores(player, opponent){
		if(!isGameOver){
		player.score += 1;
		if(player.score == max.value){
			isGameOver = true;
			opponent.display.style.color = 'red';
			player.display.style.color = 'lightgreen';
		}
		player.display.innerText = `${player.score}`;
	}
}

one.addEventListener('click', function fOne(){
	Scores(p1, p2);
})

two.addEventListener('click', function fTwo(){
	Scores(p2, p1);
})

reset.addEventListener('click', function c(){
	p1.score = 0;
	p2.score = 0;
	p1.display.innerText = `${p1.score}`;
	p2.display.innerText = `${p2.score}`;
	p2.display.style.color = 'black';
	p1.display.style.color = 'black';
	isGameOver = false;
})


// Tentative fonctionnelle :

// one.addEventListener('click', function fOne(){
// 	finalScoreOne += 1
// 	scoreOne.innerText = `${finalScoreOne}`;
// 	if(finalScoreOne == max.value || finalScoreTwo == max.value){
// 		scoreOne.style.color = 'lightgreen';
// 		scoreTwo.style.color = 'red';
// 	}
// })

// two.addEventListener('click', function fTwo(){
// 	finalScoreTwo += 1
// 	scoreTwo.innerText = `${finalScoreTwo}`;
// 	if(finalScoreTwo == max.value || finalScoreTwo == max.value){
// 		scoreTwo.style.color = 'lightgreen';
// 		scoreOne.style.color = 'red';
// 	}
// })

// reset.addEventListener('click', function c(){
// 	finalScoreOne = 0;
// 	finalScoreTwo = 0;
// 	scoreOne.innerText = `${finalScoreOne}`;
// 	scoreTwo.innerText = `${finalScoreTwo}`;
// 	scoreTwo.style.color = 'black';
// 	scoreOne.style.color = 'black';
// })

// Another version that works :

// const one = document.querySelector('#one');
// const two = document.querySelector('#two');
// const reset = document.querySelector('#reset');
// const max = document.querySelector('#max')
// const scoreOne = document.querySelector('#score1');
// const scoreTwo = document.querySelector('#score2');

// let finalScoreOne = 0;
// let finalScoreTwo = 0;
// let isGameOver = false;

// one.addEventListener('click', function fOne(){
// 	if(!isGameOver){
// 		finalScoreOne += 1;
// 		if(finalScoreOne == max.value){
// 			isGameOver = true;
// 			scoreTwo.style.color = 'red';
// 			scoreOne.style.color = 'lightgreen';
// 		}
// 		scoreOne.innerText = `${finalScoreOne}`;

// 	}
// })

// two.addEventListener('click', function fTwo(){
// 	if(!isGameOver){
// 		finalScoreTwo += 1;
// 		if(finalScoreTwo == max.value){
// 			isGameOver = true;
// 			scoreTwo.style.color = 'lightgreen';
// 			scoreOne.style.color = 'red';
// 		}
// 		scoreTwo.innerText = `${finalScoreTwo}`;

// 	}
// })

// reset.addEventListener('click', function c(){
// 	finalScoreOne = 0;
// 	finalScoreTwo = 0;
// 	scoreOne.innerText = `${finalScoreOne}`;
// 	scoreTwo.innerText = `${finalScoreTwo}`;
// 	scoreTwo.style.color = 'black';
// 	scoreOne.style.color = 'black';
// 	isGameOver = false;
// })