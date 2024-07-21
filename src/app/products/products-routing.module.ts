import {NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "../shared/components/layout/layout.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";

const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: ProductsComponent,
                data: {title: "Products"}
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
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule{}