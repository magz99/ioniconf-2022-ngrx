import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ItemsStore } from './items.store';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ItemsStore],
})
export class ItemsPage implements OnDestroy {
  readonly vm$ = this.store.vm$;

  constructor(private readonly store: ItemsStore) {
    console.log('items component constructor');
  }

  ngOnDestroy(): void {
    console.log('items component destroy');
  }

  delete(itemId: string): void {}

  addToShoppingList(itemId: string): void {}
}
