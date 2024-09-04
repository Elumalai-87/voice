import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgModel } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent  {
  data: any;
  selectedLanguage: string = '';
  userInfo: any[] = [];
  constructor(private dataService: DataService) { }
  onSubmit() {
    this.dataService.getData(this.selectedLanguage, this.selectedGender,this.selectedSlang, this.selectedAge).subscribe({
      next: (response) => {
        this.userInfo = response.message;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    });
  }
   closeForm(){
    
   }

  user_data = [
    { first_name: 'Unknown', audio: '', age: '', language: 'Tamil', gender: 'Male',  artist_image: 'https://assets-global.website-files.com/6130fc9db35a715a03742ded/655b993d0de1fe87e04cd3c3_hero-image-v4-brix-templates-p-500.jpeg', imagelike: 'https://assets-global.website-files.com/6130fc9db35a715a03742ded/66481c047761e1b2e1d6f7b6_Component%202.png', member_id: '01', slang: 'madurai', },


  ]

languageOptions: { id: string, name: string }[] = [
    { id: "", name: "Select Language" },
    { id: "Tamil", name: "Tamil" },
    { id: "Telugu", name: "Telugu" },
    { id: "Malayalam", name: "Malayalam" },
    { id: "Hindi", name: "Hindi" },
    { id: "Kannadam", name: "Kannadam" },
    { id: "English", name: "English" },
    { id: "Others", name: "Others" },
  ]


  selectedGender: string = '';
  genderOptions: { id: string, name: string }[] = [
    { id: "", name: "Select Gender" },
    { id: "Male", name: "Male" },
    { id: "Female", name: "Female" },
    { id: "Others", name: "Others" },
  ]
  selectedAge: string = '';
  ageOptions: { id: string, name: string }[] = [
    { id: "", name: "Select Age" },
    {id:"0 ", name:"0 - 5"},
    { id: "5", name: "5 - 10" },
    { id: "10", name: "10 - 15" },
    { id: "15", name: "15 - 20" },
    { id: "20", name: "20 - 25" },
    { id: "25 ", name: "25 - 30" },
    { id: "30 ", name: "30 - 35" },
    { id: "35", name: "35 - 40" },
    { id: "40 ", name: "40 - 45" },
    { id: "45", name: "45 - 50" }
  ]
  selectedSlang: string = '';
  slangOptions: { id: string, name: string }[] = [
    { id: "", name: "Select Slang" },
    { id: "Madurai", name: "Madurai" },
    { id: "Coimbatore", name: "Coimbatore" },
    { id: "Madras", name: "Madras" },
    
    { id: "General", name: "General" },

  ]


  

}
