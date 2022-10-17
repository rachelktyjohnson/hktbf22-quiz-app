game = new Game();
game.startGame();

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
        game.endQuiz();
    } else {
        // if questions still remain...
        game.handleShowNewQuestion();
    }
    }
});

// Score Variables
let questionNumber = 1;
let correctAnswers = 0;
const scoreBoard = document.querySelector('p');

function updateScore(){
    scoreBoard.innerHTML = `Your score: ${correctAnswers}/${questionNumber}`;
}

//Start score at question 1
updateScore();