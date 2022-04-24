import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceHistoryComponent } from './price-history.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PriceHistoryComponent],
  exports: [PriceHistoryComponent],
})
export class PriceHistoryComponentModule {}
