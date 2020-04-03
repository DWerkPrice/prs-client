import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[], searchCriteria: string = '' ): Product[] {
    if(searchCriteria === '') return products;
    let criteria = searchCriteria.toLowerCase();
    let selProducts: Product[] = [];
    for(let product of products) {
      if(
        product.id.toString().includes(criteria)
          || product.partNbr.toLowerCase().includes(criteria)
          || product.name.toLowerCase().includes(criteria)
          || (product.vendorId != null && product.vendor.name.toLowerCase().includes(criteria))
      ) {
      selProducts.push(product);
     }
    }
    return selProducts;
  }
}