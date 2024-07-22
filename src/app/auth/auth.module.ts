import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AngulatMaterialModule } from "../angular-material.module";
import { AuthRoutingModue } from "./auth-routing.module";


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngulatMaterialModule,
    AuthRoutingModue
  ]
})
export class AuthModule { }