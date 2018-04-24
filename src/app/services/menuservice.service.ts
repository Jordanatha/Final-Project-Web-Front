import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import { Food } from '../food/food';
import 'rxjs/add/operator/map';
import {Api} from './api'; // ini buat make sure balikin datanya dari json buat subscribe(observable), caranya pake map//

@Injectable() //we can inject it thru dependency injection within our app//
export class MenuserviceService {

  constructor(private http: Http, private api: Api) { }

  getAllData(){
	//return this.http.get('assets/data/menudata.json').map(res=>res.json());
	return this.http.get('http://localhost:8000/api/recipe').map(res=>res.json());
  }

  getSingleData(id){
    //select * from menu where id = "a"
	//return this.http.get('assets/data/menudata'+id+'.json').map(res=>res.json());
    return this.http.get('http://localhost:8000/api/recipe/'+id).map(res => res.json());
  }

  postLogin(data){
    return this.api.post('http://localhost:8000/api/login', data);
  }

  postData(data){
    return this.api.post('http://localhost:8000/api/buy', data);
  }

  registerData(data){
    return this.api.post('http://localhost:8000/api/register', data);
  }

  logout() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.get('http://localhost:8000/api/logout', options).map(res => res.json());
  }
}
