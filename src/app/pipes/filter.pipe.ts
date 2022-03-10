import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string):any {
    if(!value || !filterString){
      return value;
    }

    const dataArray:any[] = [];
    for(let data of value){
      if(data.bookName.toLocaleLowerCase().includes(filterString) || data.author.toLocaleLowerCase().includes(filterString) || data.description.toLocaleLowerCase().includes(filterString) || data.author.toLocaleLowerCase().includes(filterString)
      || data.discountPrice.toString().includes(filterString)){
        dataArray.push(data);
      }
    }

    return dataArray;
  }

}
