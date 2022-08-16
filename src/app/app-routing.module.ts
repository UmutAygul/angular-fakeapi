import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './component/categories/categories.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},

  {path:"anasayfa",component:ProductComponent},

  {path:"category/:ct",component:ProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
