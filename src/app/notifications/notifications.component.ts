import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification'
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[];

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications(): void {
    this.notificationService.getNotifications().subscribe(notifications => this.notifications = notifications);
  }

}
