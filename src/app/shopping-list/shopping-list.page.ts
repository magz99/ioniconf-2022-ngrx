import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoppingListStore } from './shopping-list.store';
@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.page.html',
  styleUrls: ['shopping-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ShoppingListStore],
})
export class ShoppingListPage {
  readonly vm$ = this.store.viewModel$;

  constructor(private readonly store: ShoppingListStore) {}

  clearShoppingList(): void {
    console.log('implement clearShoppingList!');
  }

  setItemPurchased(itemId: string): void {
    this.store.toggleItemIsPurchased(itemId);
  }

  toggleFavouriteItem(ev: Event, itemId: string): void {
    ev.stopPropagation();
    this.store.toggleItemIsFavourited(itemId);
  }

  remove(itemId: string): void {
    console.log('implement remove!');
  }

  viewDetails(itemId: string): void {
    console.log('implement viewDetails!');
  }
}
