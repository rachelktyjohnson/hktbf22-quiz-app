class Game{
    constructor(){
        this.questions = 0;
        this.correct_answers = 0;
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

    handleScoreChange(delta){
        this.questions += 1;
        this.correct_answers += delta;
        let score = document.querySelector(".score");
        score.innerHTML = `Your score: ${this.correct_answers}/${this.questions}`;
    }

    handleInteraction(e){
        //show selection
        e.target.style.borderColor = "black";

        //check answer
        let answer_correct = this.question_object.checkAnswer(e.target.innerHTML);
        this.handleScoreChange(answer_correct)

        //show answers
        this.question_object.showAnswers(e)

    }
}
