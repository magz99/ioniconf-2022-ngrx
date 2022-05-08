import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: 'favourites.page.html',
  styleUrls: ['favourites.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouritesPage {
  readonly items = [];
  constructor() {}

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
