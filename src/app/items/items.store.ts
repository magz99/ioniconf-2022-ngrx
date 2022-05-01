import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import {
  collection,
  collectionData,
  DocumentData,
  Firestore,
  Query,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { EmptyState, ITEMS_COLLECTION } from '../shared/constants';
import { ShoppingItem } from '../shared/food-item.interface';

@Injectable()
export class ItemsStore extends ComponentStore<EmptyState> {
  readonly itemCollection: AngularFirestoreCollection<ShoppingItem> =
    this.firestore.collection<ShoppingItem>(ITEMS_COLLECTION);

  readonly items$ = this.itemCollection.valueChanges({ idField: 'itemId' });

  readonly vm$ = this.select(this.items$, (items) => ({ items }));

  readonly viewItemDetails = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId) => {
        this.router.navigate(['/item-detail', itemId, 'summary']);
      })
    )
  );

  readonly addItem = this.effect((newItem$: Observable<ShoppingItem>) =>
    newItem$.pipe(
      tap((newItem: ShoppingItem) => {
        this.itemCollection.add(newItem);
      })
    )
  );

  constructor(
    private readonly router: Router,
    private readonly firestore: AngularFirestore
  ) {
    super({});
  }
}
