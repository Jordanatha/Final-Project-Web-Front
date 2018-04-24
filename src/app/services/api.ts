import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {RequestOptions, Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {

  constructor(private http: Http) {
  }

  post(url, data) {
    let headers = new Headers({
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    })

    return this.http.post(url, data, options).map(res => res.json());
  }


}
