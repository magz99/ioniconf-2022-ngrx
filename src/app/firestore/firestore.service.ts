import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ITEMS_COLLECTION } from '../shared/constants';
import { ShoppingItem } from '../shared/food-item.interface';

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  readonly itemCollection: AngularFirestoreCollection<ShoppingItem> =
    this.firestore.collection<ShoppingItem>(ITEMS_COLLECTION);

  readonly items$ = this.itemCollection.valueChanges({ idField: 'itemId' });

  readonly shoppingListCollection = this.firestore.collection<ShoppingItem>(
    ITEMS_COLLECTION,
    (ref) => ref.where('isInList', '==', true)
  );

  readonly shoppingListItems$ = this.shoppingListCollection.valueChanges({
    idField: 'itemId',
  });

  readonly favouritesCollection = this.firestore.collection<ShoppingItem>(
    ITEMS_COLLECTION,
    (ref) => ref.where('favourited', '==', true)
  );

  readonly favouriteItems$ = this.favouritesCollection.valueChanges({
    idField: 'itemId',
  });

  constructor(private readonly firestore: AngularFirestore) {}

  addItemToCollection(item: ShoppingItem): void {
    this.itemCollection.add(item);
  }
}
