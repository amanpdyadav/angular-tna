import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'address'
})
export class AddressPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!value) {
            return;
        }
        const address = value.split(',');
        if (args === 'last' && address.length >= 2) {
            return address.length >= 2 ? address[1] : '';
        }
        return address.length > 0 ? address[0] : '';
    }

}
