import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component'
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomePageComponent },
	{ path:'menu', component:MenuComponent },
	{ path: 'about-us', component:AboutComponent },
	{ path: 'login', component:LoginPageComponent },
	{ path: 'recipe/:id', component:FoodComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports:[RouterModule],
	declarations: []
})
export class AppRoutingModule { }
