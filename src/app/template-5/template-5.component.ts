import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as html2pdf from 'html2pdf.js';
import { format } from 'path';

@Component({
  selector: 'app-template-5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-5.component.html',
  styleUrl: './template-5.component.scss'
})
export class Template5Component implements OnInit{
  userDetails: any = {};

  ngOnInit(): void {
      const storedData = localStorage.getItem('userDetails');

      if(storedData){
        this.userDetails = JSON.parse(storedData);
        console.log(this.userDetails);
      }
  }

  downloadPDF() {
    if (typeof window !== 'undefined') {
      // This check ensures it's running in the browser
      const element = document.getElementById('resume-content'); // Replace with your resume element ID
      const options = {
        margin: 0.5,
        filename: `${this.userDetails.name}_Resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      
      import('html2pdf.js').then(html2pdf => {
        html2pdf.default().from(element).set(options).save();
      });
    } else {
      console.error("This method can only run in the browser.");
    }
  }


}
