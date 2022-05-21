import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FavouritesStore } from './favourites.store';

@Component({
  selector: 'app-favourites',
  templateUrl: 'favourites.page.html',
  styleUrls: ['favourites.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FavouritesStore],
})
export class FavouritesPage {
  readonly vm$ = this.store.viewModel$;

  constructor(private readonly store: FavouritesStore) {}

  unfavouriteItem(itemId: string): void {
    console.log('implement unfavouriteItem!');
  }

  addToShoppingList(itemId: string): void {
    console.log('implement addToShoppingList!');
  }

  viewDetails(itemId: string): void {
    console.log('implement viewDetails!');
  }
}
