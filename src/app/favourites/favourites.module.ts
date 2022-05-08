import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FavoritesPageRoutingModule as FavouritesPageRoutingModule } from './favourites-routing.module';
import { FavouritesPage } from './favourites.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FavouritesPage }]),
    FavouritesPageRoutingModule,
  ],
  declarations: [FavouritesPage],
})
export class FavouritesPageModule {}
