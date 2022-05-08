import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ItemsStore } from '../tabs/tabs.store';
import { EmptyState } from '../shared/constants';

@Injectable()
export class FavouritesStore extends ComponentStore<EmptyState> {
  readonly vm$ = this.select(this.itemStore.favouriteItems$, (items) => ({
    items,
  }));

  readonly viewItemDetails = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId: string) => {
        this.itemStore.viewDetails(itemId);
      })
    )
  );

  readonly addToShoppingList = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId: string) => {
        this.itemStore.toggleItemToShoppingList(itemId);
      })
    )
  );

  readonly unfavouriteItem = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId: string) => {
        this.itemStore.toggleFavouriteItem(itemId);
      })
    )
  );

  constructor(private readonly itemStore: ItemsStore) {
    super({});
  }
}
