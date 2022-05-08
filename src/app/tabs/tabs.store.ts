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
  constructor() {
    super(initialState);

    this.state$.subscribe((state) => {
      console.log('TabsStore state: ', state);
    });
  }
}
