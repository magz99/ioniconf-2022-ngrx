import { Injectable } from '@angular/core';
import { QuerySnapshot } from '@angular/fire/compat/firestore';

import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, of } from 'rxjs';
import {
  concatMap,
  map,
  mergeMap,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { FirestoreService } from '../firestore/firestore.service';
import { EmptyState } from '../shared/constants';
import { ShoppingItem } from '../shared/food-item.interface';

@Injectable()
export class ItemsStore extends ComponentStore<EmptyState> {
  readonly shoppingListItems$ = this.firestoreService.shoppingListItems$;

  readonly favouriteItems$ = this.firestoreService.favouriteItems$;

  readonly vm$ = this.select(this.firestoreService.items$, (items) => ({
    items,
  }));

  readonly viewDetails = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId) => {
        this.router.navigate(['/item-detail', itemId, 'summary']);
      })
    )
  );

  readonly addNewItem = this.effect((newItem$: Observable<ShoppingItem>) =>
    newItem$.pipe(
      tap((newItem: ShoppingItem) => {
        this.firestoreService.addItemToCollection(newItem);
      })
    )
  );

  readonly toggleItemToShoppingList = this.effect(
    (itemId$: Observable<string>) =>
      itemId$.pipe(
        map((itemId) => this.firestoreService.itemCollection.doc(itemId)),
        switchMap((itemDoc) =>
          itemDoc.get().pipe(
            tap((itemSnapshot) => {
              void itemDoc.update({ isInList: !itemSnapshot.get('isInList') });
            })
          )
        )
      )
  );

  readonly toggleFavouriteItem = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      map((itemId) => this.firestoreService.favouritesCollection.doc(itemId)),
      switchMap((itemDoc) =>
        itemDoc.get().pipe(
          tap((itemSnapshot) => {
            void itemDoc.update({
              favourited: !itemSnapshot.get('favourited'),
            });
          })
        )
      )
    )
  );

  readonly clearList = this.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      withLatestFrom(this.firestoreService.shoppingListCollection.get()),
      tap(([, items]: [void, QuerySnapshot<ShoppingItem>]) => {
        items.docs.forEach((doc) => {
          const itemDocRef = this.firestoreService.favouritesCollection.doc(
            doc.id
          );
          void itemDocRef.update({ isInList: false });
        });
      })
    )
  );

  constructor(
    private readonly router: Router,
    private readonly firestoreService: FirestoreService
  ) {
    super({});
  }
}
