
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
// import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
// import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
 import { JarwisService } from './services/jarwis.service';
 import { TokenService } from './services/token.service';
 import { AuthService } from './services/auth.service';
 import { AfterLoginService } from './services/after-login.service';
 import { BeforeLoginService } from './services/before-login.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
  
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    NavbarComponent,
    HomeComponent,
   
   
  ],

  imports: [
         BrowserModule,
        AppRoutingModule,
          FormsModule,
         HttpClientModule,
         
       ],
       providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,],
         



  bootstrap: [AppComponent]
})
export class AppModule { }



















// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import { HomeComponent } from './components/home/home.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { FormsModule,    ReactiveFormsModule,} from '@angular/forms';
// import {HttpClientModule} from '@angular/common/http';
// // import 'rxjs/add/operator/toPromise';
// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     HomeComponent,
//     SignupComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
