import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from '../data/data-service';
import { EmptyState } from '../shared/constants';
import { ShoppingItem } from '../shared/food-item.interface';

@Injectable()
export class ItemsStore extends ComponentStore<EmptyState> {
  readonly shoppingListItems$ = of([]);

  readonly favouriteItems$ = of([]);

  readonly vm$ = this.select(this.dataService.fetchItems(), (items) => ({
    items,
  }));

  readonly viewDetails = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId) => {
        this.router.navigate(['/item-detail', itemId, 'summary']);
      })
    )
  );

  readonly addNewItem = this.effect((newItem$: Observable<ShoppingItem>) =>
    newItem$.pipe(
      tap((newItem: ShoppingItem) => {
        this.dataService.addItem(newItem);
      })
    )
  );

  readonly toggleItemToShoppingList = this.effect(
    (itemId$: Observable<string>) =>
      itemId$.pipe(
        tap((itemId) => {
          this.dataService.toggleToShoppingList(itemId);
        })
      )
  );

  readonly toggleFavouriteItem = this.effect((itemId$: Observable<string>) =>
    itemId$.pipe(
      tap((itemId: string) => {
        this.dataService.toggleFavourite(itemId);
      })
    )
  );

  readonly clearList = this.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      tap(() => {
        this.dataService.clearList();
      })
    )
  );

  constructor(
    private readonly router: Router,
    private readonly dataService: DataService
  ) {
    super({});

    this.vm$.subscribe((items) => {
      console.log(JSON.stringify(items));
    });
  }
}
