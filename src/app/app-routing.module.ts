import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './home/pages/mainpage/mainpage.component';
import {UserComponent} from './home/pages/user/user.component';
import {LoginComponent} from './home/pages/login/login.component';
import {SubmittalComponent} from './home/pages/submittal/submittal.component';
import {RegisterComponent} from './home/pages/login/register.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'submit', component: SubmittalComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
