import { Component } from '@angular/core';
import {HttpServiceService} from '../http-service.service';

@Component({
  selector: 'app-pet-registration',
  templateUrl: './pet-registration.component.html',
  styleUrls: ['./pet-registration.component.css']
})
export class PetRegistrationComponent {

  constructor(private service : HttpServiceService ){

  }
  mymsg : boolean = false;
  pet: any = {species: '-1'};
  msgtext : any = "Saved Successfully";
  backgroundColor = "green"

  onSubmit() {
    this.service.SavePet(this.pet).subscribe(
      (data) => {
        debugger;
        this.msgtext="Saved Successfully";
        this.mymsg=true;
        setTimeout(() => {
          this.mymsg = false;
        }, 10000);
      },
      (error) => {
        debugger;
        this.msgtext="Saving Failled";
        this.backgroundColor="red";
      this.mymsg=true;
      setTimeout(() => {
        this.mymsg = false;
      }, 10000);
      }
    ); 
  }
}
