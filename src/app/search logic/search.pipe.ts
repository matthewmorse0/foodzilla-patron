import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'search'
})

export class SearchPipe implements PipeTransform {
    transform(restaurant: string[], searchInput: string): any[]{
        if(!searchInput) {
            return  [];
        }

       searchInput = searchInput.toLowerCase();
       return restaurant.filter(
           x =>x.toLowerCase().includes(searchInput)
       )
     }
}