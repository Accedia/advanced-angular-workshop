import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {
    
  transform(value: string, maxLength: number = 200): any {
    
    return value.length > maxLength 
      ? `${value.substring(0, maxLength)}...`
      : value;
  }
}
