import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnDestroy {
  constructor() {
    console.log('app-tab 2 constructor');
  }

  ngOnDestroy(): void {
    console.log('app-tab 2 destroy');
  }
}
