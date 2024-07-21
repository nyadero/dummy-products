import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon"
import { PaginationComponent } from './components/pagination/pagination.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component'


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductPageComponent,
    PaginationComponent,
    RatingStarsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class ProductsModule { }
