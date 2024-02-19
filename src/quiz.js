class Quiz {
  // YOUR CODE HERE:
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }
  // 1. constructor (questions, timeLimit, timeRemaining)

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    return this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const x = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[x]] = [
        this.questions[x],
        this.questions[i],
      ];
    }
    return this.questions;
  }



  checkAnswer(answer) {
    if (answer) {
      return this.correctAnswers++;
    }
  }
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if (this.currentQuestionIndex == this.questions.length) {
      return true;
    }
  }
}
