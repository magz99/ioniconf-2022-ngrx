import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoppingItem } from '../shared/food-item.interface';
import { ItemsStore } from './items.store';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ItemsStore],
})
export class ItemsPage {
  readonly vm$ = this.store.vm$;

  constructor(private readonly store: ItemsStore) {}

  delete(itemId: string): void {}

  addToShoppingList(itemId: string): void {
    this.store.toggleItemToShoppingList(itemId);
  }

  handleCreatedItem(newItem: ShoppingItem): void {
    this.store.addNewItem(newItem);
  }

  viewDetails(itemId: string): void {
    this.store.viewItemDetails(itemId);
  }
}
