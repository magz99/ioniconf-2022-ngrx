import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateItemModalModule } from '../create-item-modal/create-item-modal.module';
import { GroceryListPageRoutingModule } from './grocery-list-routing.module';
import { GroceryListPage } from './grocery-list.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GroceryListPageRoutingModule,
    ReactiveFormsModule,
    CreateItemModalModule,
  ],
  declarations: [GroceryListPage],
})
export class GroceryListPageModule {}
