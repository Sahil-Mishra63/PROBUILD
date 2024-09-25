import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  refreshPage(){
    window.location.reload();
  }

  scrollToSection(sectionId: string){
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  openEmailGenerator(){
    window.open('/email-generator', '_blank');
  }
  


}
