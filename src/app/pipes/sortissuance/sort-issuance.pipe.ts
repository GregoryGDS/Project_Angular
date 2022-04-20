import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'sortIssuance'
})
export class SortIssuancePipe implements PipeTransform {

  transform(values: Car[], order:string): Car[] {

    if(order === 'DESC'){
      return values.sort((a:Car, b:Car) => new Date(b.issuance).getTime() - new Date(a.issuance).getTime());
    }else{
      return values.sort((a:Car, b:Car) => new Date(a.issuance).getTime() - new Date(b.issuance).getTime());
    }
  }

}
