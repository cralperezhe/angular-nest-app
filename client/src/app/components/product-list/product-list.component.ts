import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  constructor(private productService: ProductService){}

  ngOnInit(){
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts()
    .subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('complete')
    })
  }
}
