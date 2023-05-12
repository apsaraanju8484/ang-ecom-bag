import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyProduct } from 'src/model/myContact';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
productName:string=''
product:MyProduct={} as MyProduct

constructor(private router:Router , private api:ApiService){}


addProduct(){
  this.api.addProduct(this.product)
  .subscribe((data:any)=>{
    // navigate to admin page
this.router.navigateByUrl('')
  })
}
}
