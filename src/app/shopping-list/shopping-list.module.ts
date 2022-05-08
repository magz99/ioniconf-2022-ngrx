import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShoppingListPageRoutingModule } from './shopping-list-routing.module';
import { ShoppingListPage } from './shopping-list.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ShoppingListPageRoutingModule,
    RouterModule,
  ],
  declarations: [ShoppingListPage],
})
export class ShoppingListPageModule {}
