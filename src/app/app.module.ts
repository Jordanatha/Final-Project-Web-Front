import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { MenuserviceService } from './services/menuservice.service';
import { FoodComponent } from './food/food.component';
import {HttpClientModule} from '@angular/common/http';
import {Api} from './services/api';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    MenuComponent,
    AboutComponent,
    LoginPageComponent,
    FoodComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MenuserviceService, Api],
  bootstrap: [AppComponent]
})
export class AppModule {

}
