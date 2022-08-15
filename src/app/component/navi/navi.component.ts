import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategoryService } from 'src/app/services/categories.service';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {

  constructor(private ct:CategoryService) { }
  categories:Categories[]=[];
  ngOnInit(): void {
    this.getct();
  }

  getct(){
    this.ct.getProducts()
    .subscribe((response)=>{
      this.categories=response
      
      
    });
  }

}
