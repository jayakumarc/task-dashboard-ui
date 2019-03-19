import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Notification } from './notification';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>('/api/notifications');
  }
}
