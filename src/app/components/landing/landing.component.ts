import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(
    private route: Router
  ) {
  }
  changeRoute(dir: string){
    this.route.navigate([`${dir}`])
  }
}
