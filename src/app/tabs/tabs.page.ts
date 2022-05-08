import { Component } from '@angular/core';
import { ItemsStore } from './tabs.store';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  providers: [ItemsStore],
})
export class TabsPage {
  constructor() {}
}
