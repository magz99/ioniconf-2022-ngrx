import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
>>>>>>> d25d5cf6 (Initial commit)

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
<<<<<<< HEAD
    Tab1PageRoutingModule,
    RouterModule,
  ],
  declarations: [Tab1Page],
=======
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
>>>>>>> d25d5cf6 (Initial commit)
})
export class Tab1PageModule {}
