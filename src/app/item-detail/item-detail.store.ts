import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, take, tap } from 'rxjs/operators';
import { DataService } from '../data/data-service';
import { RouterStateService } from '../router/router-state.service';
import { EmptyState } from '../shared/constants';

@Injectable()
export class ItemDetailStore extends ComponentStore<EmptyState> {
  // SELECTORS

  readonly selectedSegment$ = this.routerStateService.detailSegment$;
  readonly itemId$ = this.routerStateService.itemId$.pipe(take(1));
  readonly itemData$ = this.itemId$.pipe(
    switchMap((itemId) => this.dataService.fetchItem(itemId)),
    catchError((err: unknown) => EMPTY)
  );

  readonly vm$ = this.select(
    this.selectedSegment$,
    this.itemData$,
    (selectedSegment, itemData) => ({
      selectedSegment,
      itemData,
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
    private readonly dataService: DataService
  ) {
    super({});
  }
}
