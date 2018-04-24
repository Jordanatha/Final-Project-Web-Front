import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {MenuserviceService} from '../services/menuservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean;
  constructor(private http:Http, private menuService:MenuserviceService) { }

  logout(){
    this.menuService.logout().subscribe(res => {
      console.log(res);
      localStorage.removeItem('token');
      window.location.href="/home";
    });
  }

  ngOnInit() {
    this.isLogin = localStorage.getItem('token') ? true : false;
  }
}
