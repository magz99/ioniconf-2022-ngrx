import { Component } from '@angular/core';
import { ItemsStore } from './items.store';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  providers: [ItemsStore],
})
export class TabsPage {
  constructor() {}
}
