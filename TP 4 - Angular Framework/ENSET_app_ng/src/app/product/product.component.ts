import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";
import {FormsModule} from "@angular/forms";
import {Route, Router} from "@angular/router";
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    FormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  //products$!:Observable<Array<Product>>;//=[
    /*{id:1,name:"Computer",price:2000,checked:false},
    {id:2,name:"Printer",price:6000,checked:true},
    {id:3,name:"Mouse",price:4000,checked:true},
    {id:4,name:"Smartphone",price:2500,checked:false},*/
  //];

  constructor(/*private http:HttpClient*/ private ps:ProductService,private router:Router,public appState:AppStateService){
    console.log(appState.authState.roles.includes('ADMIN'));
  }

  ngOnInit():void{
        this.getProducts();
    }
getProducts(){
this.appState.setProductSate({
  status:"Loading"
});
    this.ps.getProducts(this.appState.producState.keyword,this.appState.producState.currentPage,this.appState.producState.pageSize).
  subscribe({
    next :(resp)=>{
      //console.log("get product :"+this.currentPage);
      let products=resp.body as Product[];
      let totalCount=parseInt(resp.headers.get('X-Total-Count')!)||0;
      console.log(totalCount);
      this.appState.producState.totalProduct=totalCount;
      let totalPages=Math.floor(totalCount/this.appState.producState.pageSize)||0;
      console.log(this.appState.producState.totalPages);
      console.log(totalCount % this.appState.producState.pageSize);
      if(totalCount % this.appState.producState.pageSize!=0){
        this.appState.producState.totalPages++;
        console.log(this.appState.producState.totalPages);
      }
      this.appState.setProductSate({
        products:products,
        totalProduct:totalCount,
        totalPages:totalPages
      });
      this.appState.setProductSate({
        status:"Loaded"
      });
      },
    error:err=>{
      this.appState.setProductSate({
        status:"ERROR",
        errorMessage:err
      });
    }
  });


  //this.products$=this.ps.getProducts();
}


  handelCheckProduct(prod: Product) {
    this.ps.checkProduct(prod).subscribe({
      next:updatedProduct=>{
        prod.checked=!prod.checked;
        /*this.products.map(p=>{
          if(p.id==prod.id){
            return updatedProduct;
          }else return p;
        });*/
    }
    });
    //prod.checked=!prod.checked;
  }

  handleDetelProduct(prod: Product) {
    this.ps.deleteProduct(prod).subscribe(
      next=>{
        //this.getProducts();
        this.appState.producState.products=this.appState.producState.products.filter((p:any)=>p.id!=prod.id);
      }
    )
  }

  /*searchProduct() {
//    this.products$=this.ps.searchProduct(this.keyword);
    this.ps.searchProduct(this.keyword,this.currentPage,this.pageSize).subscribe({
      next:data=>{
        this.products=data;
        console.log("data: "+this.products.toString());
      },
      error:err=>{
        console.log(err);
      }
    });
  }*/



  handelGotoPage(page: number) {
    console.log("test goto"+page);
    this.appState.producState.currentPage=page;
    this.getProducts();
  }

  handleEditProduct(prod: Product) {
    console.log("test");
  this.router.navigateByUrl(`/admin/editProduct/${prod.id}`);
  }
}
