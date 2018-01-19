import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greaterThanFilter',
  pure: true
})
export class GreaterThanFilterPipe implements PipeTransform {
  transform<T>(elements: Array<T>, property: string, value: number): Array<T> {
    return elements ? elements.filter((element: T) => element[property] >= value) : null;
  }
}
