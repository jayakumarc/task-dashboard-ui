import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Notification } from './notification';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  getNotifications(): Observable<Notification[]> {
    let notifications = [
      { id: 1, workflowId: 'workflowId-1', message: 'Notification message - 1' },
      { id: 2, workflowId: 'workflowId-2', message: 'Notification message- 2' }
    ];
    return of(notifications);
  }
}
