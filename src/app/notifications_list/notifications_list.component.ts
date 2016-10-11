import { Component } from '@angular/core';
import { ROService } from '../services/ro_service';
import { ResearchObject }   from '../model/ResearchObject';
import { Notification }   from '../model/Notification';

@Component({
  selector: 'notifications-list',
  templateUrl: './notifications_list.component.html',
  styleUrls: ['./notifications_list.component.css']
})

export class NotificationsListComponent {

  notifications = Array<Notification>();

  constructor(roService : ROService) {
      var roURI = 'http://sandbox.wf4ever-project.org/rodl/ROs/VSM_CampiFlegrei.bundle/';
      roService.getAllNotificationsForGivenRO(roURI).subscribe(res => this.notifications = res);
  }


}
