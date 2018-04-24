import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MenuserviceService } from './../services/menuservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	menudata: Array<any>;
	error:string;

	//injecting dependencies into our component//
	constructor(private http: Http, private menuService: MenuserviceService) { }

	ngOnInit() {
	
		this.menuService.getAllData().subscribe(
			datas => this.menudata = datas,
			error => this.error = error.statusText //seandainya ada error yang come along with the request//
		);


		//making http = async, everytime we make req or post some data, to the server, we dont know when the response comes back tapi http itu harus async, karena kita mau request, sambil nungguin response dari req itu, kita bisa ngelakuin yang lain lain//

		//buat dapet datanya kita harusnya pake services -> we can create a service that can give us access to the httpreq//
	}

}
