/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
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

  constructor(private readonly tabsStore: TabsStore) {
    super({});
  }
}
