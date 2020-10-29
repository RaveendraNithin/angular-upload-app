import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { AuthorisationRoutingModule } from './authorisation-routing.module';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthorisationRoutingModule
  ]
})
export class AuthorisationModule { }
