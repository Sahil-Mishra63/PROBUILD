import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template1.component.html',
  styleUrl: './template1.component.scss'
})
export class Template01Component implements OnInit{
  expertDetails: any = {};

  ngOnInit(): void {
      const storedData = localStorage.getItem('expertDetails');

      if(storedData){
        this.expertDetails = JSON.parse(storedData);
        console.log(this.expertDetails);
      }
  }

  downloadPDF() {
    if (typeof window !== 'undefined') {
      // This check ensures it's running in the browser
      const element = document.getElementById('resume-content'); // Replace with your resume element ID
      const options = {
        margin: 0.5,
        filename: `${this.expertDetails.name}_Resume.pdf`,
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
