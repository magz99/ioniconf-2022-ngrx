import { Component } from '@angular/core';
import { GroceryStore } from './tabs.store';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  providers: [GroceryStore],
})
export class TabsPage {}
