import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'sortPrice'
})
export class SortPricePipe implements PipeTransform {

  transform(values: Car[], order:string): Car[] {

    if(order === 'DESC'){
      return values.sort((a:Car, b:Car) => b.price - a.price);
    }else{
      return values.sort((a:Car, b:Car) => a.price - b.price);
    }
  }

}
