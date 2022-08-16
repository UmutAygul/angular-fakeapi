import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://fakestoreapi.com/products/"

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<Product[]>{

    return this.httpClient.get<Product[]>(this.apiUrl)
  }
  
  getProductsbyCategory(ct:string):Observable<Product[]>{
    console.log(ct,"ct")
    let newPath = this.apiUrl +"category/"+ct
    console.log("newpatH.",newPath)
    return this.httpClient.get<Product[]>(newPath)
  }
}
