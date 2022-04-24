import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import {
  selectQueryParam,
  selectRouteData,
  selectRouteParam,
  selectUrl,
} from './selectors';

type DetailSegment = 'summary' | 'price-history';

const isDetailSegment = (value: string): value is DetailSegment =>
  value === 'summary' || value === 'price-history';

@Injectable({
  providedIn: 'root',
})
export class RouterStateService {
  readonly routerUrl$ = this.routerStore.select(selectUrl);

  readonly detailSegment$ = this.routerStore
    .select(selectRouteParam('segment'))
    .pipe(
      filter((segment): segment is DetailSegment => isDetailSegment(segment))
    );

  readonly itemId$ = this.routerStore.select(selectRouteParam('itemId'));

  readonly previousRoute$ = this.routerStore.select(
    selectRouteParam('previousRoute')
  );

  constructor(private readonly routerStore: Store) {}
}
