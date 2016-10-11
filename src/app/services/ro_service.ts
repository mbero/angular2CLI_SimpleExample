import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ResearchObject }   from '../model/ResearchObject';
import { Notification }   from '../model/Notification';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';   


@Injectable()
export class ROService{
        // Resolve HTTP using the constructor
     constructor (private http: Http) {
         console.log('NotificationsService created');
     }

    getExampleList(){
        return ['test1','test2','test3','test4'];
    }

     getFeaturedROs() {
          var httpURL = 'http://beta.rohub.org/portal/ros/featured?amount=5&load=false';
            // return an observable
            return this.http.get(httpURL)
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

      getAllNotificationsForGivenRO(roURI : String) {
          var httpURL = 'http://beta.rohub.org/portal/rosdata/notifications?uri='+roURI;
            // return an observable
            return this.http.get(httpURL)
            .map( (responseData) => {
            return responseData.json();
            })
            .map((notifications: Array<any>) => {
            let result:Array<Notification> = [];
            if (notifications) {
                notifications.forEach((notification) => {
                result.push(
                            new Notification(
                                notification.title,
                                notification.researchObjectUri,
                                notification.source,
                                notification.sourceName,
                                notification.id,
                                notification.content
                                ));
                });
            }
            return result;
            });
        }
}