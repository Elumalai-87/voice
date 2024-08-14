import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { UserInformation } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<UserInformation> {
    const url = 'http://127.0.0.1:8000/api/method/voicebank.voicebank_api.voice_data?language=tamil&gender&slang&age';

    return this.http.get<UserInformation>(url);
  }
}