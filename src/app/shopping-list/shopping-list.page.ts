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
  readonly vm$ = this.store.vm$;

  constructor(private readonly store: ShoppingListStore) {}

  clearShoppingList(): void {}

  purchased(itemId: string): void {
    console.log('purchased!');
  }

  remove(itemId: string): void {
    console.log('remove!');
  }

  viewDetails(itemId: string): void {
    this.store.viewItemDetails(itemId);
  }
}
