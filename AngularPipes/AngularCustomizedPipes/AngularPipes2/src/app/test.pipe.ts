import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {
 //<!-Ex1-->          
//transform(value: unknown, ...args: unknown[]): unknown {
    //return null;
           //wish           //param1       //param2
           //<!--Ex2-->
  transform(value: string, param1:number,param2:number): string {
         return value.substring(param1,param2);
       }
      
}
  

