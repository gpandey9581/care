import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpServiceService } from '../http-service.service';
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
      const u = x.find((p:any)=>p.email==email)
      if(u){
        this.router.navigate(['/home']);
      }
    });
     if(this.user.email==email && this.user.password == password)
     {
      debugger;
     //console.log(this.data);
     }
     if(this.user.email!=email && this.user.password != password)
     {
      debugger;
     }
  }



    // authenticate(email:string,password:string): Observable<any> {
    //   debugger;
    //   const body = {email, password };
    //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //   const url = 'http://localhost:3000/user'; // Modify the URL structure as needed
    //   return this.http.get(url);
      
    // }
  }
