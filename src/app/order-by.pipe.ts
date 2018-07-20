import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any, args: any): any {

      if (!array || array === undefined || array.length === 0) {
        return null;
      }
        array.sort((a: any, b: any) => {
          if (a.name !== null) {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        }
        });
        return array;
      }
}
