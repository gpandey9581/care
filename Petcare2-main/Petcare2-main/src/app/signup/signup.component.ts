import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    email: '',
    password: ''
  };
  constructor(private http: HttpClient) {}

  onSubmit() {
    debugger;
    console.log("User: " + JSON.stringify(this.user));
    // Send a POST request to json-server to save the user data
    this.http.post('http://localhost:3000/user', this.user).subscribe({
      next: (response) => {
        console.log('User registered successfully:', response);
        // Clear the form or navigate to another page upon successful registration
      },
      error: (error) => {
        console.error('Error registering user:', error);
        // Handle error, e.g., display an error message to the user
      }
    });
  }
}
