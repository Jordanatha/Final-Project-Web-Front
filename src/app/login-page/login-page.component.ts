import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {MenuserviceService} from '../services/menuservice.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  inputEmail: string;
  inputPassword: string;

  registerEmail: string;
  registerPass: string;
  registerName: string;

  constructor(private http: Http, private menuService: MenuserviceService) { }
  submitForm(){
    const data = {
      email: this.inputEmail,
      password: this.inputPassword
    };

    this.menuService.postLogin(data).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.user.id);
      window.location.href="/home";
    });
  }

  registerData(){
    const data = {
      name: this.registerName,
      email: this.registerEmail,
      password: this.registerPass,
    }

    console.log(data);

    this.menuService.registerData(data).subscribe(res => {
      console.log(res);
      window.location.href="/login";
    });
  }
  ngOnInit() {
  }

}
