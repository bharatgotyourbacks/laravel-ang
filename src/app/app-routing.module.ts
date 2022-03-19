



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent } from '../app/components/login/login.component'
import {SignupComponent } from '../app/components/signup/signup.component'
 import { ProfileComponent } from '../app/components/profile/profile.component';
 import { HomeComponent } from '../app/components/home/home.component';
 import { NavbarComponent } from '../app/components/navbar/navbar.component';

// import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
// import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
 import { BeforeLoginService } from './services/before-login.service';
 import { AfterLoginService } from './services/after-login.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'navbar',
    component: NavbarComponent,
    canActivate: [BeforeLoginService]
  },


  // {
  //   path: 'request-password-reset',
  //   component: RequestResetComponent,
  //   canActivate: [BeforeLoginService]
  // },
  // {
  //   path: 'response-password-reset',
  //   component: ResponseResetComponent,
  //   canActivate: [BeforeLoginService]
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }








// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import {LoginComponent } from '../app/components/login/login.component'
// import {HomeComponent } from '../app/components/home/home.component'
// import {SignupComponent } from '../app/components/signup/signup.component'
// // import 'rxjs/add/operator/toPromise';
// const routes: Routes = [

// {
// path:'login',
// component:LoginComponent

// },

// {
//   path:'signup', 

//   component:SignupComponent
// },


// {
//   path:'home', 
//   component: HomeComponent
// }
// // {
// //   path:'register', 
// //   component: RegisterComponent
// // }



// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
