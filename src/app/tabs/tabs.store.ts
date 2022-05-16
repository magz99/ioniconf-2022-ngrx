/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { INITIAL_DATA } from '../data/mock-data';
import { GroceryItem } from '../shared/grocery-item.interface';

export interface GroceryStoreState {
  items: GroceryItem[];
  shoppingListIds: string[];
}

const initialState: GroceryStoreState = {
  items: INITIAL_DATA,
  shoppingListIds: [],
};

@Injectable()
export class GroceryStore extends ComponentStore<GroceryStoreState> {
  readonly items$ = this.select((state: GroceryStoreState) => state.items);

  readonly shoppingListIds$ = this.select(
    (state: GroceryStoreState) => state.shoppingListIds
  );
  readonly shoppingListItems$ = this.select((state: GroceryStoreState) =>
    state.items.filter((item) => state.shoppingListIds.includes(item.itemId))
  );

  readonly toggleItemToShoppingList = this.updater((state, id: string) => {
    let updatedIds: string[] = [];
    if (!state.shoppingListIds.includes(id)) {
      // Add item
      updatedIds = [id, ...state.shoppingListIds];
    } else {
      // Remove item
      updatedIds = state.shoppingListIds.filter((itemId) => itemId !== id);
    }
    return {
      ...state,
      shoppingListIds: updatedIds,
    };
  });

  readonly updateItemIsFavourite = this.updater((state, id: string) => {
    const updatedItems = this.toggleItemProperty(state.items, id, 'favourited');

    return {
      ...state,
      items: updatedItems,
    };
  });

  readonly updateIsItemPurchased = this.updater((state, id: string) => {
    const updatedItems = this.toggleItemProperty(state.items, id, 'purchased');

    return {
      ...state,
      items: updatedItems,
    };
  });

  readonly viewDetails = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId) => {
        void this.router.navigate(['/item-detail', itemId, 'summary']);
      })
    )
  );

  toggleItemProperty(
    items: GroceryItem[],
    id: string,
    itemProperty: string
  ): GroceryItem[] {
    const updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((item) => item.itemId === id);

    if (itemIndex !== -1 && itemProperty in updatedItems[itemIndex]) {
      updatedItems[itemIndex][itemProperty] =
        !updatedItems[itemIndex][itemProperty];
    }

    return updatedItems;
  }

  constructor(private readonly router: Router) {
    super(initialState);

    this.state$.subscribe((state) => {
      console.log('TabsStore state: ', state);
    });
  }
}
