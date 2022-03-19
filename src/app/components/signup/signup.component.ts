import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    name:null,
    last_name:null,
     phone_number:null,
     email:null,
     password:null,
     confirm_password:null,
     dob:null,
     aadhar:null,
     pancard:null,
     address:null,
  };
  public error = [];

  constructor(
    private Jarwis: JarwisService,
    private router: Router
  ) { }

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
    );
  }
  handleResponse(data) {
    // this.Token.handle(data.access_token);
    this.router.navigateByUrl('/login');
  }

  // handleError(error) {
  //   this.error = error.error.errors;
  // }

  ngOnInit() {
  }

}





// import { Component, OnInit } from '@angular/core';
// // import{BackendService} from'../../services/backend.service';
// import {HttpClient} from '@angular/common/http';
// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })


// export class SignupComponent implements OnInit {
  
//   public form={

     
//     name:null,
//     last_name:null,
//     phone_number:null,
//     email:null,
//     password:null,
//     confirm_password:null,
//     dob:null,
//     aadhar:null,
//     pancard:null,
//     address:null,


//       }
  
//       public error = null;
//   constructor(private http:HttpClient) { }
// ngOnInit(): void {}

// onSubmit() {
//   return this.http.post('http://127.0.0.1:8000/api/admin/register',this.form)
//   .subscribe(
//     data=>console.log(data),
//      error=>console.log(error)
//   );
//  }
  

//  handleError(error) {
//   this.error = error.error.error;
// }


// }

