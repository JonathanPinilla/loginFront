import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  frmForm: FormGroup;
  constructor(
    private route: Router
  ) {
    this.frmForm = new FormGroup({
      uname: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  showInfo(){
    console.log(this.frmForm);
    console.log(this.frmForm.status);
    console.log(this.frmForm.getRawValue());
  }

  regClick() {
    this.route.navigate(['/registration'])
  }
}


