import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-price-history',
  templateUrl: './price-history.component.html',
  styleUrls: ['./price-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
