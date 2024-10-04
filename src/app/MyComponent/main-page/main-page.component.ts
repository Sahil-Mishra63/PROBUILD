import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  
  constructor(private router: Router) {}

  newSkill: string = '';

  skills: string[] = [];
  educations: string[] = [];
  hobbies: string[] = [];
  languages: string[] = [];
  experiences: string[] = [];

  expertDetails: any = {
    name: "",
    dob: '',
    phone: '',
    email: '',
    address: '',
    linkedin: '',
    github: '',
    objective: '',
    skills: this.skills,
    educations: this.educations,
    profileImg: '',
    hobbies: this.hobbies,
    languages: this.languages,
    experiences: this.experiences,
  }

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
  addEducation(){
    if(this.newEd.trim()){
      this.educations.push(this.newEd.trim());
      this.newEd = '';
    }
  }

  removeEducation(index: number){
        this.educations.splice(index, 1);
  }

  newLang: string = '';
  addLanguages(){
    if(this.newLang.trim()){
      this.languages.push(this.newLang.trim());
      this.newLang = '';
      this.expertDetails.languages = [...this.languages];
    }
  }
  removeLanguages(index: number){
    this.languages.splice(index,1);
  }


  newHobbie: string = '';
  addHobbies(){
    if(this.newHobbie.trim()){
      this.hobbies.push(this.newHobbie.trim());
      this.newHobbie = '';
      this.expertDetails.hobbies = [...this.hobbies];
    }
  }

  removeHobbies(index: number){
    this.hobbies.splice(index,1);
  }
  startOver(){
    window.location.reload();
  }


  imagePreview: string | ArrayBuffer | null = '';

  previewImage(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.expertDetails.profileImg = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submit(){
    console.log("Submitted", this.expertDetails);

    //storing data in local storage
    localStorage.setItem('expertDetails',JSON.stringify(this.expertDetails));

    this.router.navigate(['/template-menu']);
  }
}
