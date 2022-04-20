import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'sortId'
})
export class SortIdPipe implements PipeTransform {

  transform(values: Car[], order:string): Car[] {

    if(order === 'DESC'){
      return values.sort((a:Car, b:Car) => b.id - a.id);
    }else{
      return values.sort((a:Car, b:Car) => a.id - b.id);
    }
  }

}
