import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavouritesPage } from './favourites.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FavoritesPageRoutingModule as FavouritesPageRoutingModule } from './favourites-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: FavouritesPage }]),
    FavouritesPageRoutingModule,
  ],
  declarations: [FavouritesPage],
})
export class FavouritesPageModule {}
