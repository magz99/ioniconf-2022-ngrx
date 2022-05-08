import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoppingItem } from '../shared/food-item.interface';
import { ItemsStore } from '../tabs/tabs.store';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsPage {
  readonly vm$ = this.itemsStore.vm$;

  /** ItemsPage is a child of TabsPage, so it has access to the ItemsStore */
  constructor(private readonly itemsStore: ItemsStore) {}

  delete(itemId: string): void {}

  addToShoppingList(itemId: string): void {
    this.itemsStore.toggleItemToShoppingList(itemId);
  }

  handleCreatedItem(newItem: ShoppingItem): void {
    this.itemsStore.addNewItem(newItem);
  }

  viewDetails(itemId: string): void {
    this.itemsStore.viewDetails(itemId);
  }
}
