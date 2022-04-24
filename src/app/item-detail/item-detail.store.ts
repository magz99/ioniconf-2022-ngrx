import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { RouterStateService } from '../router/router-state.service';

type EmptyState = Record<string, never>;

@Injectable()
export class ItemDetailStore extends ComponentStore<EmptyState> {
  // SELECTORS

  readonly selectedSegment$ = this.routerStateService.detailSegment$; //this.select((state) => state.selectedSegment);
  readonly itemId$ = this.routerStateService.itemId$.pipe(take(1));

  readonly vm$ = this.select(this.selectedSegment$, (selectedSegment) => ({
    selectedSegment,
  }));

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
    private readonly routerStateService: RouterStateService
  ) {
    super({});
  }
}
