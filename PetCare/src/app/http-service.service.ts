import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  user = {
    email: '',
    password: ''
  };

  data = [];

  constructor(private http:HttpClient) { }

  SignUp():Observable<any>
  {
   return this.http.post('http://localhost:3000/user', this.user);
  }

  SignIn(email:string,password:string):Observable<any>
  {
    debugger;
  return this.http.get('http://localhost:3000/user');
  }

  
}
