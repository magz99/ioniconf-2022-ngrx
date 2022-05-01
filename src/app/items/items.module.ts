import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsPage } from './items.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ItemsPageRoutingModule } from './items-routing.module';
import { CreateItemModalModule } from '../create-item-modal/create-item-modal.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ItemsPageRoutingModule,
    ReactiveFormsModule,
    CreateItemModalModule,
  ],
  declarations: [ItemsPage],
})
export class ItemsPageModule {}
