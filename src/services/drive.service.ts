import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

// var defaultUrl = 'http://192.168.2.54:5000/';
var defaultUrl = 'http://07318ead.ngrok.io/';

@Injectable()
export class DriveService {
  constructor(private http: Http) { }

  startRecording() {
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({headers: headers, withCredentials: true})
    let url = defaultUrl + 'start-recording';

    return this.http.get(url)
      .map((response:Response) => response.json());
  }

  stopRecording() {
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({headers: headers, withCredentials: true})
    let url = defaultUrl + 'stop-recording';

    return this.http.get(url, options)
      .map((response:Response) => response.json());
  }
}
