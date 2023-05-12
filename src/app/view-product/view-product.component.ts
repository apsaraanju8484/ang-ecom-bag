import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

productId:string=''
product:any
constructor(private activatedRoute:ActivatedRoute, private api:ApiService)
{}

ngOnInit(): void {
  this.activatedRoute.params
  .subscribe((data:any)=>{
    this.productId=data.productId
  })
  // api 
this.api.viewProduct(this.productId)
.subscribe((data:any)=>{
  this.product = data
})
}

}
