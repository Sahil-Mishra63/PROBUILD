import { Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expertise-page',
  standalone: true,
  imports: [],
  templateUrl: './expertise-page.component.html',
  styleUrl: './expertise-page.component.scss'
})
export class ExpertisePageComponent {

  constructor (private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
    
}
