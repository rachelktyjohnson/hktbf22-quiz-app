class Game{
    constructor(){
        this.questionArray = [...data]
        this.question_object = null;
    }

    getRandomQuestion(){
        let randomNumber = Math.floor(Math.random() * this.questionsArray.length);
        return new Question(this.questionsArray[randomNumber])
    }

    startGame() {
        this.handleShowNewQuestion();
    }

    handleShowNewQuestion(){
        // if not first question...
        if (this.question_object !== null) {
            // loop through questionsArray and remove the last answered question
            for (let i = 0; i < this.questionsArray.length; i++) {
                if (this.questionsArray[i].question === this.question_object.question.question) {
                    this.questionsArray.splice(i, 1);
                }
            }
        }
        this.question_object = this.getRandomQuestion();
        this.question_object.addQuestionToDisplay();
    }

    handleInteraction(e){
        //show selection
        e.target.style.borderColor = "black";
        //show answers
        this.question_object.showAnswers()

        //check if correct answer
        const answer = this.question_object.question.correct_answer;
        if (answer === e.target.textContent){
            correctAnswers ++;
        }
    }

    // endQuiz() {
    //     const main = document.querySelector('main');

    //     main.innerHTML = `
    //         <h2 class='end'>Quiz Complete!</h2>
    //         <p class='end'>Your score: (${correctAnswers}/${data.length})</p>
    //         <button class='restart'>Try Again?</button>
    //     `;
    // }
}
