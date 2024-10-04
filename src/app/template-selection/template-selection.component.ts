import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-selection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-selection.component.html',
  styleUrl: './template-selection.component.scss'
})
export class TemplateSelectionComponent {

  templates = [
    { id: 1, image: 'assets/templates/t1.jpeg', route: '/template1' },
    { id: 2, image: 'assets/templates/t2.jpeg', route: '/template2' },
    { id: 3, image: 'assets/templates/t3.jpeg', route: '/template3' },
    { id: 4, image: 'assets/templates/t4.jpeg', route: '/template4' },
    { id: 5, image: 'assets/templates/t5.jpeg', route: '/template5' },
  ];

  constructor(private router: Router){}

  selectTemplate(route:string){
    this.router.navigate([route]);
  }
}
