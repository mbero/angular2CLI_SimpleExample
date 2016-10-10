import { ROHUBApiClient } from '../http_clients/rohub_api_client';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ResearchObject }   from '../model/ResearchObject';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class NotificationsService{
        // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private featuredROsURL = 'http://beta.rohub.org/portal/ros/featured?amount=5&load=false';


    getFeaturedROs() {
        return this.http.get(this.featuredROsURL).map(response => response.json());
    }
}