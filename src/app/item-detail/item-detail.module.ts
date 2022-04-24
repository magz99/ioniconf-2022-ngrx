import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDetailPageRoutingModule } from './item-detail-routing.module';

import { ItemDetailPage } from './item-detail.page';
import { SummaryComponentModule } from './summary/summary.module';
import { PriceHistoryComponentModule } from './price-history/price-history.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetailPageRoutingModule,
    SummaryComponentModule,
    PriceHistoryComponentModule,
  ],
  declarations: [ItemDetailPage],
})
export class ItemDetailPageModule {}
