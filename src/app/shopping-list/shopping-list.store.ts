/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EmptyState } from '../shared/constants';
import { GroceryStore } from '../tabs/grocery.store';

@Injectable()
export class ShoppingListStore extends ComponentStore<EmptyState> {
  private readonly items$ = this.groceryStore.shoppingListItems$;

  private readonly favouritesListIds$ = this.groceryStore.favouritesListIds$;

  private readonly purchasedListIds$ = this.groceryStore.purchasedListIds$;

  private readonly count$ = this.select(this.items$, (items) => items.length);

  /**
   * Expose the observable values you want to display in your component
   */
  readonly viewModel$ = this.select(
    this.items$,
    this.count$,
    this.favouritesListIds$,
    this.purchasedListIds$,
    (items, count, favouritesListIds, purchasedListIds) => ({
      items,
      count,
      favouritesListIds,
      purchasedListIds,
    })
  );

  readonly updateIsItemPurchased = this.groceryStore.toggleItemIsPurchased;

  readonly toggleItemIsFavourited = this.groceryStore.toggleItemIsFavourited;

  readonly toggleItemIsPurchased = this.groceryStore.toggleItemIsPurchased;

  readonly clearShoppingList = this.groceryStore.clearShoppingList;

  constructor(private readonly groceryStore: GroceryStore) {
    super({});
  }
}
