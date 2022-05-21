import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { GroceryItem } from '../shared/grocery-item.interface';
import { GroceryStore } from '../tabs/grocery.store';

@Component({
  selector: 'app-grocery-list',
  templateUrl: 'grocery-list.page.html',
  styleUrls: ['grocery-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroceryListPage {
  readonly items$ = this.store.items$;
  readonly shoppingListIds$ = this.store.shoppingListIds$;

  // Example of combining some observables into one,
  // to be used by the template
  readonly vm$ = combineLatest([this.items$, this.shoppingListIds$]).pipe(
    map(([items, shoppingListIds]) => ({
      items,
      shoppingListIds,
    }))
  );

  constructor(private readonly store: GroceryStore) {}

  deleteItem(itemId: string): void {
    console.log('implement deleteItem!');
  }

  toggleToShoppingList(itemId: string): void {
    this.store.toggleItemToShoppingList(itemId);
  }

  toggleFavouriteItem(ev: Event, itemId: string): void {
    ev.stopPropagation();
    this.store.updateItemIsFavourite(itemId);
  }

  handleCreatedItem(newItem: GroceryItem): void {
    console.log('implement handleCreatedItem!');
  }

  handleDetailClick(itemId: string): void {
    this.store.viewDetails(itemId);
  }
}
