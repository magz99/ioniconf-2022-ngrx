import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateItemModalModule } from '../create-item-modal/create-item-modal.module';
import { ItemsPageRoutingModule } from './items-routing.module';
import { ItemsPage } from './items.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ItemsPageRoutingModule,
    ReactiveFormsModule,
    CreateItemModalModule,
  ],
  declarations: [ItemsPage],
})
export class ItemsPageModule {}
