import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.page.html',
  styleUrls: ['shopping-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListPage {
  constructor() {}

  clearShoppingList(): void {}

  purchased(itemId: string): void {
    console.log('purchased!');
  }

  remove(itemId: string): void {
    console.log('remove!');
  }
}
