import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

var defaultUrl = 'http://ngrok.io/';

@Injectable()
export class Service {
    constructor(private http: Http) { }

    startRecording() {
        let headers = new Headers({'Content-Type': 'application/json'})
        let options = new RequestOptions({headers: headers, withCredentials: true})
        let url = defaultUrl + 'startRecording/';

        console.log('Recording Started!');
        
        return this.http.get(url, options)
            .map((response:Response) => response.json());
    }

    stopRecording() {
        let headers = new Headers({'Content-Type': 'application/json'})
        let options = new RequestOptions({headers: headers, withCredentials: true})
        let url = defaultUrl + 'stopRecording/';

        console.log('Recording stopped!');
        
        return this.http.get(url, options)
            .map((response:Response) => response.json());
    }
}