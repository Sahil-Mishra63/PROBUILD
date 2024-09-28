import { Component, ViewChild, ElementRef } from '@angular/core';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


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

  openExpertisePage(){
    window.open('/expertise');
  }

  openEmailGenerator(){
    window.open('/email-generator', '_blank');
  }
  


}
