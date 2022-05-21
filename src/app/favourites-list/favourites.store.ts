/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EmptyState } from '../shared/constants';
import { GroceryStore } from '../tabs/grocery.store';

@Injectable()
export class FavouritesStore extends ComponentStore<EmptyState> {
  private readonly items$ = this.groceryStore.favouriteItems$;

  private readonly shoppingListIds$ = this.groceryStore.shoppingListIds$;

  private readonly count$ = this.select(this.items$, (items) => items.length);

  /**
   * Expose the observable values you want to display in your component
   */
  readonly viewModel$ = this.select(
    this.items$,
    this.shoppingListIds$,
    this.count$,
    (items, shoppingListIds, count) => ({
      items,
      shoppingListIds,
      count,
    })
  );

  constructor(private readonly groceryStore: GroceryStore) {
    super({});
  }
}
