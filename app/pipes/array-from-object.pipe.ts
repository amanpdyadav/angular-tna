import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayFromObject'
})
export class ArrayFromObjectPipe implements PipeTransform {
    transform(data: Object, ...args) {
        if (!data) {
            return [];
        }
        const tmpArray = [];
        Object.keys(data).forEach(key => {
            if (typeof data[key] === 'object') {
                tmpArray.push(Object.assign(data[key], { key: key }));
            } else {
                tmpArray.push({
                    value: data[key],
                    key: key
                });
            }
        });
        return JSON.parse(JSON.stringify(tmpArray));
    }
}
