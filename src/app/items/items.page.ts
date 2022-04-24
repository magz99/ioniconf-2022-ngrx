import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsPage implements OnDestroy {
  constructor() {
    console.log('app-tab 2 constructor');
  }

  ngOnDestroy(): void {
    console.log('app-tab 2 destroy');
  }
}
