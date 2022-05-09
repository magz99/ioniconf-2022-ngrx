/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EmptyState } from '../shared/constants';
import { TabsStore } from '../tabs/tabs.store';

@Injectable()
export class ItemsStore extends ComponentStore<EmptyState> {
  private readonly items$ = this.tabsStore.items$;

  private readonly count$ = this.select(this.items$, (items) => items.length);

  /**
   * Expose the observable values you want to display in your component
   */
  readonly viewModel$ = this.select(
    this.items$,
    this.count$,
    (items, count) => ({
      items,
      count,
    })
  );

  readonly updateIsItemInList = this.tabsStore.updateIsItemInList;

  readonly updateItemIsFavourite = this.tabsStore.updateItemIsFavourite;

  readonly viewDetails = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId) => {
        void this.router.navigate(['/item-detail', itemId, 'summary']);
      })
    )
  );

  constructor(
    private readonly tabsStore: TabsStore,
    private readonly router: Router
  ) {
    super({});
  }
}
