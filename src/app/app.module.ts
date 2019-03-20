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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {MainNavComponent} from './shared/components/main-nav/main-nav.component';
import {SubmittalComponent} from './home/pages/submittal/submittal.component';
import {RegisterComponent} from './home/pages/login/register.component';

@NgModule({
    declarations: [
        AppComponent,
        MainpageComponent,
        LoginComponent,
        UserComponent,
        FooterComponent,
        ButtonsComponent,
        RegisterComponent,
        MainNavComponent,
        SubmittalComponent
    ],
    imports: [
        BrowserModule,
        MatExpansionModule,
        BrowserAnimationsModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        BsDatepickerModule.forRoot(),
        NgbModule.forRoot(),
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
