import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpServiceService} from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  user = {
    email: '',
    password: ''
  };

  data : any;

  constructor(private _service: HttpServiceService,private router:Router) {}

  authenticate(email:string,password:string) {
    debugger;
     this._service.SignIn(email,password).subscribe(x=> { 
      const u = x.find((p:any)=>p.email==email && p.password==password)
      if(u){
        this.router.navigate(['/home']);
      }
      else {
        alert('Wrong email or password ');
      }
    });
  }

  navigatetoSignup(){
    this.router.navigate(['/signup']);
  }
  }

