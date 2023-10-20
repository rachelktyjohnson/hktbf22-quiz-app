game = new Game();
game.startGame();

const overlay = document.getElementById('overlay')
overlay.style.display = 'none';
const answers = document.querySelector('.answers')

let timerValue = 120;  //in seconds
let timerInterval;
const timerDisplay = document.createElement('p');  
document.body.appendChild(timerDisplay);  

function startTimer() {
    clearInterval(timerInterval);  // Clear any previous interval

    timerInterval = setInterval(() => {
        timerValue--;
        updateTimerDisplay();

        if (timerValue <= 0) {
            endGameDueToTimeOut();
        }
    }, 1000);  // Decrease timerValue every second
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    timerValue = 120;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerValue / 60);
    const seconds = timerValue % 60;
    timerDisplay.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function endGameDueToTimeOut() {
    clearInterval(timerInterval);
    alert("Time's up!"); 
    game.endQuiz(correctAnswers, data.length);
}


answers.addEventListener('click', (e)=>{
    pauseTimer();  
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
    startTimer();
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
        resetTimer();
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