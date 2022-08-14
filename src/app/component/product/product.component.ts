import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  
  products:Product[]=[];
  constructor(private httpClient:HttpClient,private pr:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.pr.getProducts()
    .subscribe((response)=>{
      this.products=response
      console.log(this.products)
      
    });
  }

}
