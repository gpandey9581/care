import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {}


    authenticate(email:string,password:string): Observable<any> {
      debugger;
      const body = {email, password };
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const url = 'http://localhost:3000/user'; // Modify the URL structure as needed
      return this.http.get(url);
      
    }
  }

