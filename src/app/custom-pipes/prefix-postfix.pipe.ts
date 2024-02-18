import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixPostfix',
  standalone: true
})
export class PrefixPostfixPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    const prefix = args.length > 0 && args[0].hasOwnProperty('prefix') ? args[0].prefix : '';
    const postfix = args.length > 0 && args[0].hasOwnProperty('postfix') ? args[0].postfix : '';
    return prefix + value.toLowerCase() + postfix;
  }

  // transform(value: string, postfix: string = ''): string {
  //   return value.toUpperCase() + postfix;
  // }

}
