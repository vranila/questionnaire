import { Component } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../model/questio';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css'
})
export class QuestionnaireComponent {
  questions: Question[] = [];
  score: number = 0;
  allAnswered: boolean = true;
  finalMessage: string = '';

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
  }

  submit(): void {
    this.allAnswered = this.questions.every(q => q.selectedAnswer);
    if (!this.allAnswered) {
      alert('Please answer all questions.');
      return;
    }
    this.calculateScore();
  }

  calculateScore(): void {
    this.score = this.questions.reduce((acc, q) => acc + (q.selectedAnswer === q.correctAnswer ? 10 : 0), 0);
    if (this.score >= 50) {
      alert(`Success! Your score is ${this.score}.`);
    } else {
      alert(`Score: ${this.score}. Please re-take the assessment.`);
    }
    this.questions.forEach(q => q.selectedAnswer = '');

    setTimeout(() => {
      window.location.reload();
    }, 3000); 
  }
  

}
