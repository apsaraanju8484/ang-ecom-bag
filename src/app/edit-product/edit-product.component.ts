import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyProduct } from 'src/model/myContact';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})    
export class EditProductComponent implements OnInit{

  productId:string=''
  product:MyProduct={} as MyProduct

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService ,private router:Router){}

ngOnInit(): void {
  this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data['productId'])
    this.productId=data['productId']
  })
  this.api.viewProduct(this.productId).subscribe
  ((data:any)=>{
    this.product=data
    console.log(this.product)
  })
}


updateProduct(){
  this.api.updateProduct(this.productId,this.product)
  .subscribe((data:any)=>{
    this.router.navigateByUrl('')
  })
}

}
