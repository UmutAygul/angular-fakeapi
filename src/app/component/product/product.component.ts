import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  
  products:Product[]=[];
  constructor(private httpClient:HttpClient,private pr:ProductService, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["ct"]){
        this.getProductsbyCategory(params["ct"])
        console.log(params,"param")
      }else{
        this.getProducts()
        console.log("param deiş")
      }
    })
    

    
  }

  getProducts(){
    this.pr.getProducts()
    .subscribe((response)=>{
      this.products=response
      // console.log(this.products)
      
    });
  }
  
  getProductsbyCategory(ct:string){
    this.pr.getProductsbyCategory(ct)
    .subscribe((response)=>{
      this.products=response
      console.log(this.products,"selm")
      
    });
  }

}
