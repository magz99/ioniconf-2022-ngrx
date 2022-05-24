/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { filter, tap, withLatestFrom } from 'rxjs/operators';
import { INITIAL_DATA } from '../data/mock-data';
import { GroceryItem } from '../shared/grocery-item.interface';

export interface GroceryStoreState {
  items: GroceryItem[];
  shoppingListIds: string[];
  favouritesListIds: string[];
  purchasedListIds: string[];
}

const initialState: GroceryStoreState = {
  items: INITIAL_DATA,
  shoppingListIds: [],
  favouritesListIds: [],
  purchasedListIds: [],
};

@Injectable()
export class GroceryStore extends ComponentStore<GroceryStoreState> {
  readonly items$ = this.select((state: GroceryStoreState) => state.items);

  readonly itemIds$ = this.select(this.items$, (items) =>
    items.map((item) => item.itemId)
  );

  readonly shoppingListIds$ = this.select(
    (state: GroceryStoreState) => state.shoppingListIds
  );

  readonly shoppingListItems$ = this.select(
    this.items$,
    this.shoppingListIds$,
    (items, shoppingListIds) =>
      items.filter((item) => shoppingListIds.includes(item.itemId))
  );

  readonly favouritesListIds$ = this.select(
    (state: GroceryStoreState) => state.favouritesListIds
  );

  readonly favouriteItems$ = this.select(
    this.items$,
    this.favouritesListIds$,
    (items, favouritesListIds) =>
      items.filter((item) => favouritesListIds.includes(item.itemId))
  );

  readonly purchasedListIds$ = this.select(
    (state: GroceryStoreState) => state.purchasedListIds
  );

  readonly toggleItemToShoppingList = this.updater((state, id: string) => {
    const updatedIds: string[] = this.getUpdatedItemsList(
      state.shoppingListIds,
      id
    );

    return {
      ...state,
      shoppingListIds: updatedIds,
    };
  });

  readonly toggleItemIsFavourited = this.updater((state, id: string) => {
    const updatedIds: string[] = this.getUpdatedItemsList(
      state.favouritesListIds,
      id
    );

    return {
      ...state,
      favouritesListIds: updatedIds,
    };
  });

  readonly toggleItemIsPurchased = this.updater((state, id: string) => {
    const updatedIds: string[] = this.getUpdatedItemsList(
      state.purchasedListIds,
      id
    );

    return {
      ...state,
      purchasedListIds: updatedIds,
    };
  });

  readonly clearShoppingList = this.updater((state) => ({
    ...state,
    shoppingListIds: [],
  }));

  readonly viewDetails = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      withLatestFrom(this.itemIds$),
      filter(([id, items]) => items.includes(id)),
      tap(([itemId]) => {
        void this.router.navigate(['/item-detail', itemId, 'summary']);
      })
    )
  );

  getUpdatedItemsList(itemIds: string[], id: string): string[] {
    let updatedIds = [...itemIds];

    if (!itemIds.includes(id)) {
      // Add item
      updatedIds = [id, ...itemIds];
    } else {
      // Remove item
      updatedIds = itemIds.filter((itemId) => itemId !== id);
    }

    return updatedIds;
  }

  constructor(private readonly router: Router) {
    super(initialState);

    this.state$.subscribe((state) => {
      console.log('GroceryStore state: ', state);
    });
  }
}
