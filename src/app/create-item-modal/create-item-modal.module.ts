import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateItemModalComponent as CreateItemModalComponent } from './create-item-modal.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CreateItemModalComponent],
  exports: [CreateItemModalComponent],
})
export class CreateItemModalModule {}
