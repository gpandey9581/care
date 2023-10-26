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

  pet = {
    name:'',
    species:'',
    age:0,
    color:'',
    OwnerName:'',
    OwnerPhoneNumber:''

  }

  constructor(private http:HttpClient) { }

  SignUp():Observable<any>
  {
   return this.http.post('http://localhost:3000/user', this.user);
  }

  SignIn(email:string,password:string):Observable<any>
  {
  return this.http.get('http://localhost:3000/user');
  }

  SavePet(pet:any):Observable<any>
  {
   return this.http.post('http://localhost:3000/pet', pet);
  }

  GetAllPets():Observable<any>
  {
  return this.http.get('http://localhost:3000/pet');
  }
}
