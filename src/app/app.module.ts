import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BsDatepickerModule, TooltipModule} from 'ngx-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainpageComponent} from './home/pages/mainpage/mainpage.component';
import {LoginComponent} from './home/pages/login/login.component';
import {UserComponent} from './home/pages/user/user.component';
import {HomeRoutingModule} from './home/home-routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {FooterComponent} from './shared/components/footer/footer.component';
import {ButtonsComponent} from './shared/components/buttons/buttons.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        MainpageComponent,
        LoginComponent,
        UserComponent,
        FooterComponent,
        NavbarComponent,
        ButtonsComponent,
    ],
    imports: [
        BrowserModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        BsDatepickerModule.forRoot(),
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
