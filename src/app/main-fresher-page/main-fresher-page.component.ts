import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-fresher-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main-fresher-page.component.html',
  styleUrl: './main-fresher-page.component.scss'
})
export class MainFresherPageComponent {

  //holds the new skill value
newSkill: string = '';

//array to store the list of skills
skills: string[] = [];
//main function to add the skill to the list
  addSkill(){
    if(this.newSkill.trim()){
      this.skills.push(this.newSkill.trim());
      this.newSkill = '';
    }
  }

  removeSkill(index: number){
    this.skills.splice(index, 1);
  }
}
