import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    const url = 'https://putsreq.com/hv72glHjjJLJQthx7MK5';
    return this.http.get<string[]>(`${url}`);
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<UserSettings> {
    const url = 'https://putsreq.com/Ve7V7LIoS0YRXRyXJxkb';
    return this.http.post<UserSettings>(`${url}`, userSettings);
  }
}
