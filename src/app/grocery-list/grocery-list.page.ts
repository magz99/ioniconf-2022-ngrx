import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GroceryItem } from '../shared/grocery-item.interface';
import { GroceryStore } from '../tabs/tabs.store';

@Component({
  selector: 'app-grocery-list',
  templateUrl: 'grocery-list.page.html',
  styleUrls: ['grocery-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroceryListPage {
  readonly items$ = this.store.items$;
  readonly shoppingListIds$ = this.store.shoppingListIds$;

  constructor(private readonly store: GroceryStore) {}

  delete(itemId: string): void {}

  toggleToShoppingList(itemId: string): void {
    this.store.toggleItemToShoppingList(itemId);
  }

  toggleFavouriteItem(ev: Event, itemId: string): void {
    ev.stopPropagation();
    this.store.updateItemIsFavourite(itemId);
  }

  handleCreatedItem(newItem: GroceryItem): void {
    console.log('implement handleCreatedItem!');
  }

  viewDetails(itemId: string): void {
    this.store.viewDetails(itemId);
  }
}
