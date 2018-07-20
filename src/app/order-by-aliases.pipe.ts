import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByAliases'
})
export class OrderByAliasesPipe implements PipeTransform {

  transform(array: any, args: any): any {

    if (!array || array === undefined || array.length === 0) {
      return null;
    }
      array.sort((a: any, b: any) => {
        if (a.aliases[0] !== null) {
        if (a.aliases[0] < b.aliases[0]) {
          return -1;
        } else if (a.aliases[0] > b.aliases[0]) {
          return 1;
        } else {
          return 0;
        }
      }
      });
      return array;
    }

}
