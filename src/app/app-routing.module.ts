import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './home/pages/mainpage/mainpage.component';

const routes: Routes = [
  {path: '', component: MainpageComponent, data: {title: 'Home'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
