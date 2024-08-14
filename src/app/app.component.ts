import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  constructor(private http:HttpClient){


  }
  ngOnInit(){
    this.getUsers().subscribe((response) =>
      console.log('response:',response)
  ) 
  
  
  }
  
  getUsers(){
            return this.http.get('http://127.0.0.1:8000/api/method/voicebank.voicebank_api.voice_data?language=tamil&gender&slang&age');
    
  }
}
