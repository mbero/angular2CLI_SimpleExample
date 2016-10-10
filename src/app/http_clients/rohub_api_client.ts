/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ResearchObject }   from '../model/ResearchObject';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ROHUBApiClient {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private featuredROsURL = 'http://beta.rohub.org/portal/ros/featured?amount=5&load=false'; 

    // Fetch 5 featured ROs  
    getFeaturedROs () : Observable<ResearchObject[]> {
         // ...using get request
         return this.http.get(this.featuredROsURL)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
}