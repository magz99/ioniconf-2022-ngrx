import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingListPage } from './shopping-list.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ShoppingListPageRoutingModule } from './shopping-list-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ShoppingListPageRoutingModule,
    RouterModule,
  ],
  declarations: [ShoppingListPage],
})
export class ShoppingListPageModule {}
