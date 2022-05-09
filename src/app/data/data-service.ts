import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GroceryItem } from '../shared/grocery-item.interface';
import { INITIAL_DATA } from './mock-data';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor() {}

  fetchItems(): Observable<GroceryItem[]> {
    return of(INITIAL_DATA);
  }

  fetchItem(itemId: string): Observable<GroceryItem> {
    const groceryItem = INITIAL_DATA.find((item) => item.itemId === itemId);

    if (groceryItem === undefined) {
      throw Error('Could not fetch item');
    }

    return of(groceryItem);
  }
}
