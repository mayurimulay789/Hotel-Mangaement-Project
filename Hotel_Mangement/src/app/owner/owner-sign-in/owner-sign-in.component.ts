import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
@Component({
  selector: 'app-owner-sign-in',
  templateUrl: './owner-sign-in.component.html',
  styleUrls: ['./owner-sign-in.component.scss']
})
export class OwnerSignInComponent {
SignInForm!:FormGroup;
}
