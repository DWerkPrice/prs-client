import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortd'
})
export class SortdPipe implements PipeTransform {

  transform(items: any[], sortBy: string): any[] {//first column is data coming in second is column to sort by
    if(items == null || items.length ==0) return items;
    let sortFn = (a: any ,b: any): number => {
      let x = this.setValue(a[sortBy]);
      let y = this.setValue(b[sortBy]);
      if(x === y) return 0;
      return (x > y) ? -1 : 1; 
    };

    return items.sort(sortFn);
  }
  setValue = (colValue: any): any => {
    if(colValue == null) return '';
    if(typeof colValue == "number") return colValue;
    return colValue.toString().toLowerCase();
  }
}
