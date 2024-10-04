import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-fresher-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main-fresher-page.component.html',
  styleUrl: './main-fresher-page.component.scss'
})
export class MainFresherPageComponent {

  constructor(private router: Router) {}

  //holds the new skill value
newSkill: string = '';

//array to store the list of skills
skills: string[] = [];
educations: string[] = [];
hobbies: string[] = [];
languages: string[] = [];
//main function to add the skill to the list
  addSkill(){
    if(this.newSkill.trim()){
      this.skills.push(this.newSkill.trim());
      this.newSkill = '';
      this.userDetails.skills = [...this.skills];
    }
  }

  removeSkill(index: number){
    this.skills.splice(index, 1);
  }

  newHobbie: string = '';
  addHobbies(){
    if(this.newHobbie.trim()){
      this.hobbies.push(this.newHobbie.trim());
      this.newHobbie = '';
      this.userDetails.hobbies = [...this.hobbies];
    }
  }

  removeHobbies(index: number){
    this.hobbies.splice(index,1);
  }

  newLang: string = '';
  addLanguages(){
    if(this.newLang.trim()){
      this.languages.push(this.newLang.trim());
      this.newLang = '';
      this.userDetails.languages = [...this.languages];
    }
  }
  removeLanguages(index: number){
    this.languages.splice(index,1);
  }

  newEd: string = '';
  // educations: string[] = [];

  addEducation(){
    if(this.newEd.trim()){
      this.educations.push(this.newEd.trim());
      this.newEd = '';
      this.userDetails.educations = [...this.educations];
    }
  }

  removeEducation(index: number){
    this.educations.splice(index, 1);
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
        this.userDetails.profileImg = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


  userDetails: any = {
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
  }

  submit(){
    console.log("Submitted", this.userDetails);

    //storing data in local storage
    localStorage.setItem('userDetails',JSON.stringify(this.userDetails));

    this.router.navigate(['/template-selection']);
  }


  // generateResume(form) {
  //   if (form.valid) {
  //     console.log("Resume data", this.userDetails);
  //     console.log("Skills", this.skills);
  //     console.log("Education", this.educations);
  //     // Here you can implement the logic for generating the resume
  //   } else {
  //     console.error("Form is invalid");
  //   }
  // }
}
