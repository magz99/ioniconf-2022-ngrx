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
  readonly items: Observable<any[]>;
  readonly vm$ = this.store.vm$;

  constructor(
    private readonly firestore: AngularFirestore,
    private readonly store: ShoppingListStore
  ) {
    this.items = firestore.collection('food-items').valueChanges();
  }

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
