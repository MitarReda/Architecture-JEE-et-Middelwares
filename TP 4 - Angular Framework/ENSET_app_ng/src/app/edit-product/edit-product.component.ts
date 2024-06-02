import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {aliasTransformFactory} from "@angular/compiler-cli/src/ngtsc/transform";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{
  productId!:number;
  productForm!:FormGroup;
  constructor(private fb:FormBuilder,private activatedRoute : ActivatedRoute,private productService:ProductService) {
  }
  ngOnInit(): void {

    this.productId=this.activatedRoute.snapshot.params['id'];
    console.log(this.productId);
    this.productService.getProductsById(this.productId).subscribe(
      {
        next:(product)=>{
          this.productForm=this.fb.group({
            id:this.fb.control(product.id),
            name:this.fb.control(product.name,[Validators.required]),
            price:this.fb.control(product.price),
            checked:this.fb.control(product.checked),
          });
          console.log(this.productForm);
        },
        error:err => {
          console.log("error");
        }
      }
    );
  }

  updateProduct() {
    let product=this.productForm.value;
    this.productService.updateProducts(product).subscribe({
      next:data=>{
alert(JSON.stringify(data));
      },
      error:err => {

      }
    });
  }
}
