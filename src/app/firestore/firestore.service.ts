import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ITEMS_COLLECTION } from '../shared/constants';
import { ShoppingItem } from '../shared/food-item.interface';

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  readonly itemCollection: AngularFirestoreCollection<ShoppingItem> =
    this.firestore.collection<ShoppingItem>(ITEMS_COLLECTION);

  readonly items$ = this.itemCollection
    .valueChanges({ idField: 'itemId' })
    .pipe(map((items) => items as ShoppingItem[]));

  readonly shoppingListCollection = this.firestore.collection<ShoppingItem>(
    ITEMS_COLLECTION,
    (ref) => ref.where('isInList', '==', true)
  );

  readonly shoppingListItems$: Observable<ShoppingItem[]> =
    this.shoppingListCollection
      .valueChanges({
        idField: 'itemId',
      })
      .pipe(map((items) => items as ShoppingItem[]));

  readonly favouritesCollection = this.firestore.collection<ShoppingItem>(
    ITEMS_COLLECTION,
    (ref) => ref.where('favourited', '==', true)
  );

  readonly favouriteItems$ = this.favouritesCollection
    .valueChanges({
      idField: 'itemId',
    })
    .pipe(map((items) => items as ShoppingItem[]));

  constructor(private readonly firestore: AngularFirestore) {}

  toggleFavourite(itemId: string): void {
    const itemDoc = this.favouritesCollection.doc(itemId);

    itemDoc.get().pipe(
      tap((itemSnapshot) => {
        void itemDoc.update({
          favourited: !itemSnapshot.get('favourited'),
        });
      })
    );
  }

  toggleInShoppingList(itemId: string): void {
    const itemDoc = this.favouritesCollection.doc(itemId);

    itemDoc.get().pipe(
      tap((itemSnapshot) => {
        void itemDoc.update({
          favourited: !itemSnapshot.get('isInList'),
        });
      })
    );
  }

  clearList(): void {
    this.shoppingListCollection.get().pipe(
      tap((items) => {
        items.docs.forEach((doc) => {
          const itemDocRef = this.favouritesCollection.doc(doc.id);
          void itemDocRef.update({ isInList: false });
        });
      })
    );
  }

  addItemToCollection(item: ShoppingItem): void {
    this.itemCollection.add(item);
  }
}
