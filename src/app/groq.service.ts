import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroqService {

  private apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
  private apiKey = 'Your API key here'; //api key

  constructor(private http: HttpClient) {}

  askQuestion(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`
    });

    const body = {
      model: 'llama3-8b-8192',
      messages: [{ role: 'user', content: prompt }]
    };

    return this.http.post(this.apiUrl, body, { headers });
  }}
