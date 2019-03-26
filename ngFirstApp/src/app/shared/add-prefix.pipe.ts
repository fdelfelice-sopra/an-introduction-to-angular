import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPrefix'
})
export class AddPrefixPipe implements PipeTransform {

  transform (inputString : string , prefix : string ) : string{
    return  prefix + ': ' + inputString.toLocaleLowerCase();      
  }

}
