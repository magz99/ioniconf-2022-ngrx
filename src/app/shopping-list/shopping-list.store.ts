import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ItemsStore } from '../tabs/items.store';
import { EmptyState } from '../shared/constants';

@Injectable()
export class ShoppingListStore extends ComponentStore<EmptyState> {
  readonly vm$ = this.select(this.itemStore.shoppingListItems$, (items) => ({
    items,
  }));

  readonly viewItemDetails = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId: string) => {
        this.itemStore.viewDetails(itemId);
      })
    )
  );

  readonly clearShoppingList = this.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      tap(() => {
        this.itemStore.clearList();
      })
    )
  );

  readonly removeFromShoppingList = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId: string) => {
        this.itemStore.toggleItemToShoppingList(itemId);
      })
    )
  );

  constructor(private readonly itemStore: ItemsStore) {
    super({});
  }
}
