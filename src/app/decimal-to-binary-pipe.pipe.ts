import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalToBinaryPipe'
})
export class DecimalToBinaryPipePipe implements PipeTransform {

  transform(value: number): number {
    return Number.parseInt(value.toString(2));
  }

}
