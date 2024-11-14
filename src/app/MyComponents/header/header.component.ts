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
  gotoFrontPage(){
    window.open('/front')
  }

  openExpertisePage(){
    window.open('/expertise');
  }

  openEmailGenerator(){
    window.location.href = 'http://localhost:50827/';
  }
  


}
