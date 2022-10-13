class Question {
  constructor(question) {
    this.question = question;
  }

  addQuestionToDisplay() {
    const question_container = document.querySelector(".quiz-container h3");
    const answers_container = document.querySelector(".answers");

    question_container.innerHTML = this.question.question;
    let answers = [this.question.correct_answer].concat(
      this.question.incorrect_answers
    );

      let temp = [];
      answers.forEach((e) => {
        let r = Math.floor(answers.length * Math.random());
        while (temp[r] !== undefined) {
          r = Math.floor(answers.length * Math.random());
        }
        temp[r] = e;
      });
      console.log(temp);
      answers = [...temp]

    let answers_html = "";
    answers.forEach((answer) => {
      answers_html += `<div class='answer'>${answer}</div>`;
    });
    answers_html += "";
    answers_container.innerHTML = answers_html;
  }

  checkAnswer(answer) {
    return answer === this.question.correct_answer;
  }

  showAnswers() {
    const answers = document.querySelectorAll(".answer");

    answers.forEach((answer) => {
      if (this.checkAnswer(answer.textContent)) {
        answer.style.backgroundColor = "green";
      } else {
        answer.style.backgroundColor = "red";
      }
    });
  }
}
