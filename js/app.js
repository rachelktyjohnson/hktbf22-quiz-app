game = new Game();
game.startGame();

const answers = document.querySelector('.answers')

answers.addEventListener('click', (e)=>{
    game.handleInteraction(e)
})

const next_button = document.querySelector('.next')
next_button.addEventListener('click', ()=>{
    game.handleShowNewQuestion();
})
