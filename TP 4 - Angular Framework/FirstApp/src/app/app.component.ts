import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirtApp';
 public currentRoute:any;
  constructor(private router:Router) {
  }
  gotoHome() {
    this.currentRoute="home";
  this.router.navigateByUrl("/home");
  }

  gotoProduct() {
    this.currentRoute="product";
  this.router.navigateByUrl("/product");
  }
}
