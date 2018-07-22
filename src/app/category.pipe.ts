import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  transform(categories: any, searchText: any): any {
    console.log(searchText);
    if (searchText === undefined) {
      return categories;
    }

    return categories.filter(function(category) {
      if (searchText !== undefined) {
      if (category.name !== '' && category.aliases[0]==="") {
        console.log(6);
      return category.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      } else {
        return category.aliases[0].toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      }
      }
    });
  }
}
