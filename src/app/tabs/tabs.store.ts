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

  readonly updateIsItemInList = this.updater((state, id: string) => {
    const updatedItems = this.toggleItemProperty(state.items, id, 'isInList');

    return {
      ...state,
      items: updatedItems,
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

  constructor() {
    super(initialState);

    this.state$.subscribe((state) => {
      console.log('TabsStore state: ', state);
    });
  }
}
