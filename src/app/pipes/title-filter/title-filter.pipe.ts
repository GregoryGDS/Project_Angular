import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(items: Car[], filter: string) {

    if (!items || !filter) {
      return items;
    }
    return items.filter(
      item => 
        item.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
  }
  
}
