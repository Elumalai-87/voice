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
            return this.http.get('http://voicebank.sagasoft.io/api/method/voicebank.www.voicebank.search?language=tamil&slang=&gender=male&age=');
    
  }
  postUsers(){
    return this.http.post<any>(
      'http://voicebank.sagasoft.io/api/method/voicebank.www.enquery.search',
      {
        cust_name: '',
        email_id: '',
        phone_number: '',
        member_id_list: ''
      }
    );
    
  }
}
