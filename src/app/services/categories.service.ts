import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import { Categories } from '../models/categories';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://fakestoreapi.com/products/categories"

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<Categories[]>{
    return this.httpClient.get<Categories[]>(this.apiUrl)
  }
}
