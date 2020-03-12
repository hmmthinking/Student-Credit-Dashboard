import {Pipe, PipeTransform} from '@angular/core';
import { Class } from './models/class';

@Pipe ({
    name: 'filter'
})
// in this filter, the id that we want to display is passed in and the items that match are returned
export class FilterPipe implements PipeTransform {
    transform(items: Class[], status: number): Class[] {
        if (!items) { // if no items are found
          return []; // return an empty array
        }
        if (!status) { // if no class status provided
            return items; // return all items
        }

        return items.filter(it => {
            return it.classStatus.valueOf() === status;
        });
    }
}
