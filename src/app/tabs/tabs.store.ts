/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { INITIAL_DATA } from '../data/mock-data';
import { GroceryItem } from '../shared/grocery-item.interface';

export interface TabsStoreState {
  items: GroceryItem[];
}

const initialState: TabsStoreState = {
  items: INITIAL_DATA,
};

@Injectable()
export class TabsStore extends ComponentStore<TabsStoreState> {
  readonly items$ = this.select((state: TabsStoreState) => state.items);

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

  constructor() {
    super(initialState);

    this.state$.subscribe((state) => {
      console.log('TabsStore state: ', state);
    });
  }
}
