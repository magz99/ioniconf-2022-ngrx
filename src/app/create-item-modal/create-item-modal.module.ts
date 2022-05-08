import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateItemModalComponent } from './create-item-modal.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CreateItemModalComponent],
  exports: [CreateItemModalComponent],
})
export class CreateItemModalModule {}
