import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FirestoreService } from '../firestore/firestore.service';
import { EmptyState } from '../shared/constants';

@Injectable()
export class ShoppingListStore extends ComponentStore<EmptyState> {
  readonly vm$ = this.select(
    this.firestoreService.shoppingListItems$,
    (items) => ({
      items,
    })
  );

  // TODO: move this to parent component store
  readonly viewItemDetails = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId) => {
        this.router.navigate(['/item-detail', itemId, 'summary']);
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
