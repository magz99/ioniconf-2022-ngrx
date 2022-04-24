import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { ItemDetailStore } from './item-detail.store';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  providers: [ItemDetailStore],
})
export class ItemDetailPage {
  readonly vm$ = this.store.vm$;

  constructor(private readonly store: ItemDetailStore) {}

  segmentChanged(event: Event): void {
    const segmentValue = (event as CustomEvent<SegmentChangeEventDetail>).detail
      .value;
    console.log('segment value: ', segmentValue);

    // Call the updater to update the selectedSegment
    this.store.navigateToSegment(segmentValue);
  }
}
