import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginServiceService } from '../../service/LoginService/login-service.service';
import { from } from 'rxjs';
import {Router} from "@angular/router"
@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  angForm= new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  submitted = false;
  constructor( private fb: FormBuilder,private login:LoginServiceService,private router: Router) { 
    
  }

  createForm() {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', Validators.required ]
   });
  }
 // convenience getter for easy access to form fields
 get f() { return this.angForm.controls; }

  ngOnInit() {
    if(localStorage.getItem('token_admin'))
    {
      this.router.navigateByUrl('admin');
    }
    this.createForm();
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.angForm.invalid) {
        return;
    }
    this.login.userLogin(this.f.email.value,this.f.password.value)
            .subscribe(
                data => {
                    //console.log(data.token_key);
                    localStorage.setItem('token_admin',data.token_key);
                    this.router.navigateByUrl('admin');
                },
                error => {
                   console.log(error);
                });
    //alert('SUCCESS!! :-)')
}

}
