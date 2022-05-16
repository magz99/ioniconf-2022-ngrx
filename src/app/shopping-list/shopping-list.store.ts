/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EmptyState } from '../shared/constants';
import { GroceryStore } from '../tabs/tabs.store';

@Injectable()
export class ShoppingListStore extends ComponentStore<EmptyState> {
  private readonly items$ = this.select(this.tabsStore.items$, (items) =>
    items.filter((item) => item.isInList)
  );

  private readonly count$ = this.select(this.items$, (items) => items.length);

  /**
   * Expose the observable values you want to display in your component
   */
  readonly viewModel$ = this.select(
    this.items$,
    this.count$,
    (items, count) => ({
      items,
      count,
    })
  );

  readonly updateIsItemPurchased = this.tabsStore.updateIsItemPurchased;

  constructor(private readonly tabsStore: GroceryStore) {
    super({});
  }
}
