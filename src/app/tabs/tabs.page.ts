import { Component } from '@angular/core';
import { GroceryStore } from './grocery.store';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  providers: [GroceryStore],
})
export class TabsPage {}
