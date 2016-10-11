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
     constructor (private http: Http) {
         console.log('NotificationsService created');
     }

    getExampleList(){
        return ['test1','test2','test3','test4'];
    }

     getFeaturedROs() {
          var featuredROsURL = 'http://beta.rohub.org/portal/ros/featured?amount=5&load=false';
            // return an observable
            return this.http.get(featuredROsURL)
            .map( (responseData) => {
            return responseData.json();
            })
            .map((researchObjects: Array<any>) => {
            let result:Array<ResearchObject> = [];
            if (researchObjects) {
                researchObjects.forEach((researchObject) => {
                result.push(
                            new ResearchObject(researchObject.uri, researchObject));
                });
            }
            return result;
            });
        }
}