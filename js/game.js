class Game{
    constructor(){
        this.questionsArray = [...data];
        this.question_object = null;
    }

    getRandomQuestion(){
        let randomNumber = Math.floor(Math.random() * this.questionsArray.length);
        return new Question(this.questionsArray[randomNumber])
    }

    startGame() {
        this.handleShowNewQuestion();
        document.getElementById('overlay').style.display = 'none';
        document.querySelector('.total-questions').textContent = `Total Questions: ${data.length}`;
        document.querySelector('body').style.backgroundColor = '';
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

    endQuiz(score, questionsTotal) {
        document.getElementById('overlay').style.display = 'flex';
        document.querySelector('body').style.backgroundColor = '#3659a2';
        document.getElementById('end-h3').textContent = `Your Score: ${score}/${questionsTotal}`;
    }
}
