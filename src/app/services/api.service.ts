import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyProduct } from 'src/model/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 baseUrl:string='http://localhost:3000/products'

  constructor(private http:HttpClient) { }


  // function for get allContacts
  public getAllProducts():Observable<MyProduct>{
   return this.http.get<MyProduct>(this.baseUrl)
   }


  //  function for view a particular product
  viewProduct(productId:string){
    return this.http.get(`${this.baseUrl}/${productId}`)
  }


    //  function for add a particular product
    addProduct(productBody:any){
      return this.http.post(this.baseUrl,productBody)
    }


    //  function for delete a particular product
  deleteProduct(productId:any){
    return this.http.delete(`${this.baseUrl}/${productId}`)
  }
      //  function for delete a particular product
      updateProduct(productId:any,productBody:any){
        return this.http.put(`${this.baseUrl}/${productId}`,productBody)
      }
}
