import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GroceryItem } from '../shared/grocery-item.interface';
import { ItemsStore } from './items.store';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ItemsStore],
})
export class ItemsPage {
  readonly vm$ = this.store.viewModel$;

  constructor(private readonly store: ItemsStore) {}

  delete(itemId: string): void {}

  addToShoppingList(itemId: string): void {
    this.store.updateIsItemInList(itemId);
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
