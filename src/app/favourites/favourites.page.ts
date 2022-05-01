import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
import { FavouritesStore } from './favourites.store';

@Component({
  selector: 'app-favourites',
  templateUrl: 'favourites.page.html',
  styleUrls: ['favourites.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FavouritesStore],
})
export class FavouritesPage {
  readonly vm$ = this.store.vm$;
  constructor(private readonly store: FavouritesStore) {}

  unfavouriteItem(itemId: string): void {}

  addToShoppingList(itemId: string): void {}

  viewDetails(itemId: string): void {
    this.store.viewItemDetails(itemId);
  }
}
