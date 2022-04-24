import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsPage implements OnDestroy {
  constructor() {
    console.log('items component constructor');
  }

  ngOnDestroy(): void {
    console.log('items component destroy');
  }

  delete(itemId: string): void {}

  addToShoppingList(itemId: string): void {}
}
