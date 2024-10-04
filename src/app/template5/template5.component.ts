import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template5.component.html',
  styleUrl: './template5.component.scss'
})
export class Template05Component  implements OnInit{
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
    
      const element = document.getElementById('resume-content');
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
