import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SubmittalComponent } from './pages/submittal/submittal.component';
import { RegisterComponent } from './pages/login/register.component';

@NgModule({
  declarations: [SubmittalComponent, RegisterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
