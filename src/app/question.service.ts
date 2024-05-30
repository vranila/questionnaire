import { Injectable } from '@angular/core';
import { Question } from './model/questio';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questions: Question[] = [
    {
      questionText: '1.What is the capital of France?',
      options: ['Berlin', 'Rome', 'Paris', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      questionText: '2.Who wrote the famous play "Romeo and Juliet"?',
      options: ['William Shakespeare','Jane Austen','Charles Dickens','Mark Twain'],
      correctAnswer: 'William Shakespeare'
    },
    {
      questionText: '3.What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Pb'],
      correctAnswer: 'Au'
    },
    {
      questionText: '4.Which planet is known as the "Red Planet"?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars'
    },
    {
      questionText: '5.Who painted the Mona Lisa?',
      options: ['Pablo Picasso','Leonardo da Vinci ','Vincent van Gogh','Claude Monet'],
      correctAnswer: 'Leonardo da Vinci'
    },
    {
      questionText: '6.What is the tallest mammal in the world?',
      options: ['Giraffe', 'Lion', 'Rhino', 'Elephant'],
      correctAnswer: 'Giraffe'
    },
    {
      questionText: '7.In which year did the Titanic sink?',
      options: ['1912', '1923', '1934', '1913'],
      correctAnswer: '1912'
    },
    {
      questionText: '8.What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'O2', 'Nacl'],
      correctAnswer: 'H2O'
    },
    {
      questionText: '9.Who was the first person to step on the moon?',
      options: ['Buzz Aldrin', ' Neil Armstrong', 'Alan Shepard', 'Yuri Gagarin'],
      correctAnswer: ' Neil Armstrong'
    },
    {
      questionText: '10.What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', ' Indian Ocean', 'Arctic Ocean', 'Pacific Ocean '],
      correctAnswer: 'Pacific Ocean '
    },
  ];

  constructor() { }

  getQuestions(): Question[] {
    return this.questions;
  }
}
