import {Injectable} from '@angular/core';
import { ROHUBApiClient } from '../http_clients/rohub_api_client';


@Injectable()
export class NotificationsService{

    getNotificationsList() : string[]{
        return ["2","2","2","2","2","2","2","2","2","2"];
    }
}