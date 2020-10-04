import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameToUppercase'
})
export class NameToUppercasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
