import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from '../vendor/vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string = ''): Vendor[] {
    if(searchCriteria == '') return vendors;
    let criteria = searchCriteria.toLowerCase();
    let selVendors: Vendor[] = [];
    for(let vendor of vendors) {
     if(vendor.id.toString().includes(criteria)
       || (vendor.code.toLowerCase().includes(criteria))
       || (vendor.name.toLowerCase().includes(criteria))
     ){
        selVendors.push(vendor);
     }
  }
  
    return selVendors;
  
  }

}