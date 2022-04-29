import { Injectable } from '@angular/core';
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
import { map, switchMap, tap } from 'rxjs/operators';
import { EmptyState, ITEMS_COLLECTION } from '../shared/constants';
import { ShoppingItem } from '../shared/food-item.interface';

@Injectable()
export class ItemsStore extends ComponentStore<EmptyState> {
  readonly itemCollection$: Observable<Query<DocumentData>> = of(
    collection(this.firestore, ITEMS_COLLECTION)
  );

  readonly items$ = this.itemCollection$.pipe(
    switchMap((itemCollection) =>
      collectionData(itemCollection, { idField: 'itemId' })
    ),
    map((docData) => docData as ShoppingItem[])
  );

  readonly vm$ = this.select(this.items$, (items) => ({ items }));

  readonly viewItemDetails = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId) => {
        this.router.navigate(['/item-detail', itemId, 'summary']);
      })
    )
  );

  constructor(
    private readonly router: Router,
    private readonly firestore: Firestore
  ) {
    super({});
  }
}
