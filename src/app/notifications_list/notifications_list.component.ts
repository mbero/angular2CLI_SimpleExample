import { Component } from '@angular/core';
import { NotificationsService } from '../services/notifications_service';
import { ResearchObject }   from '../model/ResearchObject';

@Component({
  selector: 'notifications-list',
  templateUrl: './notifications_list.component.html',
  styleUrls: ['./notifications_list.component.css']
})

export class NotificationsListComponent {

  featuredROs = Array<ResearchObject>();

  constructor(notificationsService : NotificationsService) {
      notificationsService.getFeaturedROs().subscribe(res => this.featuredROs = res);
  }

}
