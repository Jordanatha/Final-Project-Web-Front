import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {MenuserviceService} from './../services/menuservice.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  obj2: any = {};
  obj: any = {};
  instruction_data: any = {};
  ingredients_data: Array<any>;
  chef_data: any = {};
  error: string;
  id: number;
  quantityhaha: number;
  isLogin: boolean;

  input_quantity: number;
  input_address: string;
  input_phone: string;
  input_total_price: number;
  input_payment: string = "BCA transfer: 2001586174";


  changeQuantity(event){
    this.quantityhaha = event.target.value;
  }


  constructor(private menuService: MenuserviceService, private route: ActivatedRoute) {
  }

  submitData(){
    // console.log(this.input_total_price);
    const data = {
      quantity: this.input_quantity,
      address: this.input_address,
      phone: this.input_phone,
      total_price: this.input_quantity * this.obj.price,
      payment: this.input_payment,
      user_id: localStorage.getItem('user_id'),
      recipe_id: this.id,
    }

    console.log(data);

    this.menuService.postData(data).subscribe(res => {
      console.log(res);
      window.location.href="/home";
    });
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.menuService.getSingleData(this.id).subscribe(
      datas => {
        this.obj2 = datas;
        this.obj = this.obj2.recipe;
        this.chef_data = this.obj.chef;
        this.ingredients_data = this.obj.ingredients;
        this.instruction_data = this.obj.instructions[0];
        console.log(datas);
      },
      error => {
        this.error = error.statusText;
      } // seandainya ada error yang come along with the request//
    );

    this.isLogin = localStorage.getItem('token') ? true : false;
  }

  //onClick(){
  //post data
  //get result
  //validate if success...
  // localStorage.setItem("jwt", result.data.token);
  // then redirect
  //validate if error...
  //}

}
