import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  
  newSkill: string = '';

  skills: string[] = [];

  addSkill(){
    if(this.newSkill.trim()){
      this.skills.push(this.newSkill.trim());
      this.newSkill = '';
    }
  }

  removeSkill(index: number){
    this.skills.splice(index, 1);
  }

  newWE: string = '';
  experiences: string[] = [];

 addWorkExperience(){
    if(this.newWE.trim()){
      this.experiences.push(this.newWE.trim());
      this.newWE = '';
    }
  }

  removeWorkExperience(index: number){
    this.experiences.splice(index, 1);
  }

  newEd: string = '';
  educations: string[] = [];

  addEducation(){
    if(this.newEd.trim()){
      this.educations.push(this.newEd.trim());
      this.newEd = '';
    }
  }

  removeEducation(index: number){
        this.educations.splice(index, 1);
  }

  startOver(){
    window.location.reload();
  }
}
