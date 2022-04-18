import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
<<<<<<< HEAD
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  clearShoppingList(): void {}

  purchased(itemId: string): void {
    console.log('purchased!');
  }

  remove(itemId: string): void {
    console.log('remove!');
  }
=======
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

>>>>>>> d25d5cf6 (Initial commit)
}
