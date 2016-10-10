import { Component } from '@angular/core';
import { NotificationsService } from '../services/notifications_service';

@Component({
  selector: 'notifications-list',
  templateUrl: './notifications_list.component.html',
  styleUrls: ['./notifications_list.component.css']
})
export class NotificationsListComponent {

  title = 'NotificationsListComponent';
  notificationsList;

  constructor(notificationsService : NotificationsService) {
      this.notificationsList = notificationsService.getFeaturedROs().
      subscribe(notificationsList => this.notificationsList = notificationsList, err => { console.log(err);});
  }

}
