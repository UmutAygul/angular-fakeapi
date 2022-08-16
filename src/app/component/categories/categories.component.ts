import { HttpClient } from '@angular/common/http';
import { Component, Directive, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategoryService } from 'src/app/services/categories.service';

var a: boolean;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {


  categories: Categories[] = [];
  currentCategory: Categories;

  constructor(private httpClient: HttpClient, private ct: CategoryService) { }

  ngOnInit(): void {
    this.getct();
    a=true;
    
  }

  isClicked()
  {
    a=true;
  }
  getct() {
    this.ct.getProducts().subscribe((response) => {
      this.categories = response
    });
  }

  setCurrentCategory(b: Categories) {
    this.currentCategory = b;
    a=false;
  }
  getCurrentCategory(category: Categories) {
    if (category == this.currentCategory && a==false) {
      return "list-group-item active"
      
    } else {
      return "list-group-item"
    }
  }
  getAllCategory() {
    if (a) {
      return "list-group-item active"
    } else {
      return "list-group-item "
    }
  }
}
