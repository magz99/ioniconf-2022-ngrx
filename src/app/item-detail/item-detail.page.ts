import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { ItemDetailStore } from './item-detail.store';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ItemDetailStore],
})
export class ItemDetailPage {
  readonly vm$ = this.store.vm$;

  constructor(private readonly store: ItemDetailStore) {
    console.log('item detail page constructor');
  }

  segmentChanged(event: Event): void {
    const segmentValue = (event as CustomEvent<SegmentChangeEventDetail>).detail
      .value;
    console.log('segment value: ', segmentValue);

    // Call the updater to update the selectedSegment
    this.store.navigateToSegment(segmentValue);
  }
}
