import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GroceryItem } from '../shared/grocery-item.interface';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsPage {
  readonly items = [];

  constructor() {}

  delete(itemId: string): void {}

  addToShoppingList(itemId: string): void {
    console.log('implement addToShoppingList!');
  }

  toggleFavouriteItem(ev: Event, itemId: string): void {
    ev.stopPropagation();
    console.log('implement toggleFavouriteItem!');
  }

  handleCreatedItem(newItem: GroceryItem): void {
    console.log('implement handleCreatedItem!');
  }

  viewDetails(itemId: string): void {
    console.log('implement viewDetails!');
  }
}
