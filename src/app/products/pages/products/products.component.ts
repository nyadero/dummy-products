import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { ProductCategoryInterface, ProductInterface } from '../../interface/product.interface';
import { ProductCategory } from '../../enums/categories.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationData } from '../../interface/pagination-data.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductInterface[] = [];
  productsCategories = Object.values(ProductCategory);
  productCategories: ProductCategoryInterface[] = [];
  searchValue: string = ''; // Property to bind with ngModel
  isLoading: boolean = true;
  paginationData!: PaginationData;

  constructor(
    private readonly productsService: ProductsService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      const category = params.get("category");
      console.log(params.keys, params);
      console.log({ category });

      // fetch products by category
      if (category) {
        this.fetchProductsByCategory(category);
      }
      if (!category && !this.searchValue) {
        this.fetchAllProducts();
      }
    });

    // subscribe to query params
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchValue = params['q'] || '';
      console.log(this.searchValue);
      if (this.searchValue) {
        this.searchProducts(this.searchValue);
      }
    });


    // fetch product categories
    this.productsService.productCategories().subscribe(
      (data) => {
        this.productCategories = data;
        this.isLoading = false
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    )

  }


  searchProducts(searchValue: string) {
    this.productsService.searchProducts(searchValue).subscribe(
      (data) => {
        console.log({ data });
        this.products = data.products;
        this.paginationData = {
          total: data.total,
          skip: data.skip,
          limit: data.limit,
        };
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    )
  }


  fetchAllProducts() {
    // load all products
    this.productsService.products().subscribe(
      (data) => {
        this.products = data.products;
        this.paginationData = {
          total: data.total,
          skip: data.skip,
          limit: data.limit,
        };
        console.log({paginationData: this.paginationData});
        
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }


  fetchProductsByCategory(category: string) {
    this.productsService.productsByCategory(category).subscribe(
      (data) => {
        console.log({ data });
        this.products = data.products;
        this.paginationData = {
          total: data.total,
          skip: data.skip,
          limit: data.limit,
        };
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    )
  }


  onSearch(): void {
    this.router.navigate(['/products/search'], { queryParams: { q: this.searchValue } });
  }

}
