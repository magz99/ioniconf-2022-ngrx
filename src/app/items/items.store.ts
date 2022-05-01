import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, of } from 'rxjs';
import { concatMap, map, switchMap, tap } from 'rxjs/operators';
import { FirestoreService } from '../firestore/firestore.service';
import { EmptyState } from '../shared/constants';
import { ShoppingItem } from '../shared/food-item.interface';

@Injectable()
export class ItemsStore extends ComponentStore<EmptyState> {
  readonly vm$ = this.select(this.firestoreService.items$, (items) => ({
    items,
  }));

  readonly viewItemDetails = this.effect((itemId$: Observable<string>) =>
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
              itemDoc.update({ isInList: !itemSnapshot.get('isInList') });
            })
          )
        )
      )
  );

  constructor(
    private readonly router: Router,
    private readonly firestoreService: FirestoreService
  ) {
    super({});
  }
}
