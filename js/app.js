game = new Game();
game.startGame();

const overlay = document.getElementById('overlay')
overlay.style.display = 'none';
const answers = document.querySelector('.answers')

answers.addEventListener('click', (e)=>{
    if(answers.className !== 'answers active' && e.target.classList.contains('answer')){
        game.handleInteraction(e)
        answers.className = "answers active";
        updateScore();
    }
    else{
        answers.setAttribute('disabled', true); 
    }
})

const next_button = document.querySelector('.next')
next_button.addEventListener('click', ()=>{
    if(answers.className === 'answers active'){
    answers.className = 'answers'
    questionNumber ++;
    updateScore();

    // if answered all questions...
    if (questionNumber > data.length) {
        game.endQuiz(correctAnswers, data.length);
    } else {
        // if questions still remain...
        game.handleShowNewQuestion();
    }
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-reset')) {
        game = new Game();
        game.startGame();
        questionNumber = 1;
        correctAnswers = 0;
        scoreBoard.innerHTML = `Your score: ${correctAnswers}/${questionNumber}`;
    }
})

// Score Variables
let questionNumber;
let correctAnswers;
if (questionNumber !== 1 && correctAnswers !== 0) {
    questionNumber = 1;
    correctAnswers = 0;
}
const scoreBoard = document.querySelector('p');

function updateScore(){
    scoreBoard.innerHTML = `Your score: ${correctAnswers}/${questionNumber}`;
}

//Start score at question 1
updateScore();