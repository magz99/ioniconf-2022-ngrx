import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoppingListStore } from './shopping-list.store';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
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

  clearShoppingList(): void {
    this.store.clearShoppingList();
  }

  remove(itemId: string): void {
    this.store.removeFromShoppingList(itemId);
  }

  viewDetails(itemId: string): void {
    this.store.viewItemDetails(itemId);
  }
}
