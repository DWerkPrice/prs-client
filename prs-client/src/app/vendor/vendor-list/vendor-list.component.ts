import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  sortCol: string = 'name'
  sortCode: string = "sortd"
  sortdCode: boolean = false;

  vendors: Vendor[] = [];

  searchCriteria: string = '';

  sortByColumn(col: string) {
    //  if(this.systemsvc.sortColumn == col) {
          this.sortdCode === true ? this.sortdCode = false : this.sortdCode = true;
          console.log("this is column", col, this.sortdCode);
      //    this.systemsvc.sortColumn = col;
          this.sortCol = col;
     //     this.sortCode = "sortd"
          console.log("The service column",this.systemsvc.sortColumn)
    //  }
     //     this.systemsvc.reverseSort = true;
    //  } else {
    //        globalThis.systemsvc.sortColumn = col;
    //        globalThis.systemsvc.reverseSort = false
    //     }
      } 

  constructor(
    private vendor: VendorService,
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
    this.vendor.list().subscribe(
      res =>{
        this.vendors = res;
        console.log(res);
      },
      err => {
         console.error(err)
      }
    );
  }
}
