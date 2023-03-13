import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm:any): any{
    return value.filter(function(searchText:any){
      return searchText.username.indexOf(searchTerm)>-1
    });
  }

}
