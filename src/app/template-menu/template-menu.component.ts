import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-menu.component.html',
  styleUrl: './template-menu.component.scss'
})
export class TemplateMenuComponent {
  templates = [
    { id: 1, image: 'assets/templates/t1.jpeg', route: '/template-1' },
    { id: 2, image: 'assets/templates/t2.jpeg', route: '/template-2' },
    { id: 3, image: 'assets/templates/t3.jpeg', route: '/template-3' },
    { id: 4, image: 'assets/templates/t4.jpeg', route: '/template-4' },
    { id: 5, image: 'assets/templates/t5.jpeg', route: '/template-5' },
  ];

  constructor(private router: Router){}

  selectTemplate(route:string){
    this.router.navigate([route]);
  }
}
