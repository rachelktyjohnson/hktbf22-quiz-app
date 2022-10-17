class Question{
    constructor(question){
        this.question = question
    }

    addQuestionToDisplay(){
        const question_container = document.querySelector(".quiz-container h3")
        const answers_container = document.querySelector(".answers")
        question_container.innerHTML = this.question.question
        let answers = [this.question.correct_answer].concat(this.question.incorrect_answers)
        let answers_html = ""
        this.randomAnswers(answers);
        answers.forEach((answer)=>{
            answers_html += `<div class='answer'>${answer}</div>`
        })
        answers_html += ""
        answers_container.innerHTML = answers_html
        this.styleByCategory(this.question.category)
    }

    checkAnswer(answer){
        return answer === this.question.correct_answer
    }

    showAnswers(){
        const answers = document.querySelectorAll(".answer")

        answers.forEach((answer)=>{

            if (this.checkAnswer(answer.textContent)){
                answer.style.backgroundColor = "green";
            } else {
                answer.style.backgroundColor = "red";
            }
   
        })

    }
    randomAnswers(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    styleByCategory(category){
        const body = document.querySelector('body');
        const h3 = document.querySelector('.category');
        const answers = document.querySelectorAll(".answer");
        let catClass = '';

        if (category === 'javascript') {
            h3.textContent = 'Category: JavaScript';
            catClass = 'js';
        } else if (category === 'css') {
            h3.textContent = 'Category: CSS';
            catClass = 'css';
        } else if (category === 'html') {
            h3.textContent = 'Category: HTML'
            catClass = 'html';
        } else {
            h3.textContent = 'Category: Misc.'
            catClass = 'other';
        }

        body.className = "";
        body.classList.add(catClass);

        answers.forEach((answer) => {
            answer.classList.add(catClass);
        })
    }

}
