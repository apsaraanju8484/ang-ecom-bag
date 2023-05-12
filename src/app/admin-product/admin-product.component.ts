import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyProduct } from 'src/model/myContact';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit{

  allProducts : MyProduct[] = [];

  constructor(private api:ApiService) {  }

ngOnInit(): void {
 this.getAllProducts()

}



// get all contact 
getAllProducts(){
this.api.getAllProducts()
.subscribe((data:any) => {
  // console.log(data);
  this.allProducts = data
})
}

deleteProduct(productId:any){
  this.api.deleteProduct(productId)
  .subscribe((data:any)=>{
    this.getAllProducts()
  })
}

}
// this.api.getAllProducts().subscribe
// ((data:MyProduct)=>{
//   console.log(data)
//   this.allProducts:data
// })
// }