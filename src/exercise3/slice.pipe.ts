/*
  Tasks:
    1. Modify the transform function so that it returns
       the substring from 0 to maxLength if necessary.
*/


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  /*
    Note:

    For our custom pipe to work, we have to implement the
    PipeTransform interface and it's transform function.
    Angular will invoke that function with the value as
    the first argument followed by any other paramethers. 
  */
  transform(value: string, maxLength: number = 200): any {
    
    return value.length > maxLength 
      ? value //.substring(...
      : value;
  }

}
