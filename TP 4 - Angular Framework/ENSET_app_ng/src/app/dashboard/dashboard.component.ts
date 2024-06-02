import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
constructor(public appState:AppStateService) {
}

 public totalCheckedProducts() {

  let productChecked=this.appState.producState.products.filter((p:Product)=> p.checked);
    return productChecked.length||0;
  }
}
