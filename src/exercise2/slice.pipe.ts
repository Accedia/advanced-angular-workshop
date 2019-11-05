import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: string, length?: number): any {
    const strLength = !!length ? length : 200;
    return value.length > strLength ? `${value.substring(0, strLength)}...` : value;
  }

}
