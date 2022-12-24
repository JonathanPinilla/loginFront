import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  frmForm: FormGroup;

  constructor(
    private route: Router
  ) {
    this.frmForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      uname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  showInfo(){
    console.log(this.frmForm);
    console.log(this.frmForm.status);
    console.log(this.frmForm.getRawValue());
  }

  logClick() {
    this.route.navigate(['/login'])
  }
}
