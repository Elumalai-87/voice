import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl='http://voicebank.sagasoft.io/api/method/voicebank.www.voicebank.search?language=tamil&slang=&gender=male&age='
  private apiUrl1='http://voicebank.sagasoft.io/api/method/voicebank.www.enquery.search?cust_name=kathir&email_id=senkathirsmart%40gmail.com&phone_number=9080903380&member_id_list=123'
  constructor(private http:HttpClient) {

   }
   
    getData(language: string, gender: string, slang: string, age: string): Observable<any> {
      //console.log(this.apiUrl + `?language=${language}&gender=${gender}&slang&age`)
      return this.http.get<any>(this.apiUrl + `?language=${language}&gender=${gender}&slang=${slang}&age=${age}`);
    }
    postData(cust_name:string, email_id:string,phone_number:string, member_id_list:string): Observable<any> {
      return this.http.post<any>(
        this.apiUrl1,  
        {             
          cust_name,
          email_id,
          phone_number,
          member_id_list
        }
      );
      

    }

   }
   

