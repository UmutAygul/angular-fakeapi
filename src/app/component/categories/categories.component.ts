import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategoryService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  
  // categories:Categories[]=[];
  constructor(private httpClient:HttpClient,private ct:CategoryService) { }

  ngOnInit(): void {
    // this.getct();
  }

  // getct(){
  //   this.ct.getProducts()
  //   .subscribe((response)=>{
  //     this.categories=response
  //     console.log("aasdg",this.categories)
      
  //   });
  // }

}
