class Game{
    constructor(){
        this.question_object = null;
    }

    getRandomQuestion(){
        let randomNumber = Math.floor(Math.random() * data.length);
        return new Question(data[randomNumber])
    }

    startGame() {
        this.handleShowNewQuestion();
    }

    handleShowNewQuestion(){
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
}
