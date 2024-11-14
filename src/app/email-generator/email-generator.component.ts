import { Component } from '@angular/core';
import { GroqService } from '../groq.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-email-generator',
  standalone: true,
  imports: [ FormsModule, CommonModule, HttpClientModule],
  templateUrl: './email-generator.component.html',
  styleUrl: './email-generator.component.scss'
})
export class EmailGeneratorComponent {
  userInput: string = '';
  chatHistory: { question: string; answer: string }[] = [];

  constructor(private groqService: GroqService) {}

  askQuestion() {
    if (this.userInput.trim()) {
      const question = this.userInput;
      this.groqService.askQuestion(question).subscribe((response) => {
        const answer = response.choices[0]?.message?.content || 'No answer received';
        this.chatHistory.push({ question, answer });
      });
      this.userInput = '';
    }
  }
}
