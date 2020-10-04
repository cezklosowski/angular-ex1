import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendWordPipe'
})
export class AppendWordPipePipe implements PipeTransform {

  transform(value: string, word: string): string {
    return word + " " + value;
  }

}
