import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../../interface/product.interface';
import { ProductsService } from '../../service/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  product!:ProductInterface;
  isLoading: boolean = true;
   

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ){}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("id");
      console.log(id);
      
      if (id) {
        this.fetchProduct(id);
      }
    })
   
  }

  
  fetchProduct(id: string) {
    this.productsService.productById(parseInt(id)).subscribe(
      (data)=>{
          this.product = data;
          this.isLoading = false;
      },
      (error)=>{

      }
    )
  }

}
