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

  handleCreatedItem(newItem: GroceryItem): void {
    console.log('implement handleCreatedItem!');
  }

  viewDetails(itemId: string): void {
    console.log('implement viewDetails!');
  }
}
