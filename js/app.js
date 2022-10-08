game = new Game();
game.startGame();

const answers = document.querySelector('.answers')

answers.addEventListener('click', (e)=>{
    game.handleInteraction(e);
    answers.className = "answers active";
})

const next_button = document.querySelector('.next')
next_button.addEventListener('click', ()=>{
    if(answers.className === 'answers active'){
    game.handleShowNewQuestion();
    answers.className = 'answers'
    }
});
