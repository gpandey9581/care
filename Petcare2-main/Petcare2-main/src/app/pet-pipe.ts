import { PipeTransform, Pipe } from '@angular/core';
import {Pet} from '../app/models/pet';

@Pipe({
    name: 'PetFilter'
})
export class petpipe implements PipeTransform {
    transform(pets: Pet[], searchTerm: string): Pet[] {
        if (!pets || !searchTerm) {
            return pets;
        }

        return pets.filter(pets =>
            pets.species.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}