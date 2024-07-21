import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/pages/products/products.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ProductPageComponent } from './products/pages/product-page/product-page.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path:"",
        component: ProductsComponent
      },
      {
        path: "category/:category",
        component: ProductsComponent
    },
    {
        path: "search",
        component: ProductsComponent
    },
    {
        path: ":id",
        component: ProductPageComponent,
        data: {title: "Products Page"}
    },
    ]
  },
  {
    path: "products",
    loadChildren: () => import('./products/products-routing.module').then(m => m.ProductsRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
