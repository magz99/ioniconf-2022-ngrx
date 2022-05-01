import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ShoppingItem } from '../shared/food-item.interface';

interface ShoppingListStoreState {
  items: ShoppingItem[];
}

const initialState: ShoppingListStoreState = {
  items: [
    {
      name: 'apple',
      brand: 'gala',
      price: 1.99,
      purchased: false,
      notes: '',
      prices: [],
      store: 'Longos',
      image: '',
      itemId: '1',
      isInList: true,
    },
    {
      name: 'milk',
      brand: 'Neilson',
      price: 5.99,
      purchased: true,
      notes: 'Try to find a cheaper alternative.',
      prices: [],
      store: 'Loblaws',
      image: '',
      itemId: '2',
      isInList: true,
    },
  ],
};

@Injectable()
export class ShoppingListStore extends ComponentStore<ShoppingListStoreState> {
  readonly foodItems$ = this.select((state) => state.items);

  readonly vm$ = this.select(this.foodItems$, (foodItems) => ({
    foodItems,
  }));

  readonly viewItemDetails = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId) => {
        this.router.navigate(['/item-detail', itemId, 'summary']);
      })
    )
  );

  constructor(private readonly router: Router) {
    super(initialState);
  }
}