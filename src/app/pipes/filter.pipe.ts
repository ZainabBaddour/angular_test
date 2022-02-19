import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByPropertyAndValue' })
export class FilterByPropertyAndValuePipe implements PipeTransform {
  //this pipe will transform the search text to string then check if wanted value is included in ut
  transform(items: any[], searchField: string, searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter((it) => {
      return it[searchField]
        .toString()
        .toLocaleLowerCase()
        .includes(searchText);
    });
  }
}
