import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './home/pages/mainpage/mainpage.component';
import {UserComponent} from './home/pages/user/user.component';
import {LoginComponent} from './home/pages/login/login.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
