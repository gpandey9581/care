import { Component } from '@angular/core';
import {HttpServiceService} from '../http-service.service';
import { OnInit } from '@angular/core';
import {petpipe} from '../pet-pipe';
import {Pet} from '../models/pet';

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.css']
})
export class PetTableComponent implements OnInit {

  constructor(private service : HttpServiceService ){
  }

  searchTerm:string='';
 
  pets: Pet[] = [];
  ngOnInit() {
  this.service.GetAllPets().subscribe(x=>{this.pets=x})
  }

}
