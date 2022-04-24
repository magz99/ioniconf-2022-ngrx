import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsPage } from './items.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ItemsPageRoutingModule } from './items-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ItemsPageRoutingModule,
  ],
  declarations: [ItemsPage],
})
export class ItemsPageModule {}
