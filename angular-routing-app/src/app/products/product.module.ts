import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';



@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductEditComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
