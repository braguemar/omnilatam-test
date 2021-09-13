import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterPipe implements PipeTransform {

  public transform(data: any[], field: string, searchText: string) {
    if (!field || !searchText) {
      return data;
    }

    return data.filter( item => item?.[field]?.toLowerCase().includes(searchText.trim().toLowerCase()))
  }
}
