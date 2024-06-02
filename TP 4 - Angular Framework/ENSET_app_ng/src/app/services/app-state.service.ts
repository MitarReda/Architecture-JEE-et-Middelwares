import { Injectable } from '@angular/core';
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public producState:any={
    products:[],
    keyword:"",
    totalPages:0,
    pageSize:3,
    currentPage:1,
    totalProduct:0,
    status:"",
    errorMessage:""
  }

  public authState:any={
    isAuthenticated:false,
    username:undefined,
    roles:undefined,
    token:undefined
  }
  constructor() { }

  public setProductSate(state:any){
  this.producState={...this.producState,...state}
  }

  public setAuthSate(state:any){
    this.authState={...this.authState,...state}
  }
}
