import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm:any): any{
console.log("value",value);
if(!value){
  return null;
}
if(!searchTerm){
  return value;
}
searchTerm=searchTerm.toLowercase();
 return  value.filter((res:any)=>{
  return JSON.stringify(res).toLowerCase().includes(searchTerm)
})
    

}
}