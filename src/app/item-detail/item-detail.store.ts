import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, take, tap } from 'rxjs/operators';
import { DataService } from '../data/data-service';
import { RouterStateService } from '../router/router-state.service';
import { EmptyState } from '../shared/constants';
import { GroceryStore } from '../tabs/grocery.store';

@Injectable()
export class ItemDetailStore extends ComponentStore<EmptyState> {
  // SELECTORS

  readonly selectedSegment$ = this.routerStateService.detailSegment$;
  readonly itemId$ = this.routerStateService.itemId$.pipe(take(1));
  readonly itemData$ = this.itemId$.pipe(
    switchMap((itemId) => this.dataService.fetchItem(itemId)),
    catchError((err: unknown) => EMPTY)
  );

  readonly isFavourited$ = this.select(
    this.itemId$,
    this.groceryStore.favouritesListIds$,
    (itemId, favouritesList) => favouritesList.includes(itemId)
  );

  readonly vm$ = this.select(
    this.selectedSegment$,
    this.itemData$,
    this.isFavourited$,
    (selectedSegment, itemData, isFavourited) => ({
      selectedSegment,
      itemData,
      isFavourited,
    })
  );

  // UPDATERS

  readonly navigateToSegment = this.effect((segment$: Observable<string>) =>
    segment$.pipe(
      switchMap((segment) =>
        this.itemId$.pipe(
          tap((itemId) => {
            console.log('segment: ', segment);
            this.router.navigate(['/item-detail', itemId, segment]);
          })
        )
      )
    )
  );

  constructor(
    private readonly router: Router,
    private readonly routerStateService: RouterStateService,
    private readonly dataService: DataService,
    private readonly groceryStore: GroceryStore
  ) {
    super({});
  }
}
