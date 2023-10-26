import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { PetRegistrationComponent } from './pet-registration/pet-registration.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PetTableComponent } from './pet-table/pet-table.component';
import {petpipe} from '../app/pet-pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    PetRegistrationComponent,
    SidebarComponent,
    AboutUsComponent,
    PetTableComponent,
    petpipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
