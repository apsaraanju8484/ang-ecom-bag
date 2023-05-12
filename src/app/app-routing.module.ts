import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

{
  path:'' ,redirectTo:'/products/admin', pathMatch:'full'
}
,
{
  path:'products/admin' , component:AdminProductComponent
}
,
{
  path:'products/add' , component:AddProductComponent
},
{
  path:'products/view/:productId' , component:ViewProductComponent
}
,
{
  path:'products/edit/:productId' , component:EditProductComponent
}
,
{
  path:'**' , component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
