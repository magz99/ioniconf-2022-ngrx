import { Component } from '@angular/core';
import { TabsStore } from './tabs.store';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  providers: [TabsStore],
})
export class TabsPage {
  constructor(private readonly store: TabsStore) {}
}
