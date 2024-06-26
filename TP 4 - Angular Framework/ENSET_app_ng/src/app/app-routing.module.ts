import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {ProductComponent} from "./product/product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {
    path:"admin",component:AdminTemplateComponent,canActivate:[AuthenticationGuard],children:[
      {path:"home",component:HomeComponent},
      {path:"newProduct",component:NewProductComponent,canActivate:[AuthorizationGuard],data:{requiredRoles:'ADMIN'}},
      {path:"product",component:ProductComponent},
      {path:"editProduct/:id",component:EditProductComponent,canActivate:[AuthorizationGuard],data:{requiredRoles:'ADMIN'}},
      {path:"notAuthorized",component:NotAuthorizedComponent},
    ]
  },
  {path:"",redirectTo:"login",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
