import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroceryItem } from '../shared/grocery-item.interface';

@Component({
  selector: 'app-create-item-modal',
  templateUrl: './create-item-modal.component.html',
  styleUrls: ['./create-item-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateItemModalComponent {
  @Output() createItem: EventEmitter<GroceryItem> =
    new EventEmitter<GroceryItem>();
  readonly form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      brand: [''],
      price: [0],
      favourited: false,
      image: [''],
      isInList: false,
      notes: [''],
      store: [''],
    });
  }

  cancel(): void {
    this.resetValues();
  }

  create(): void {
    this.createItem.emit(this.form.value);
    this.resetValues();
  }

  resetValues(): void {
    this.form.patchValue({
      name: '',
      brand: '',
      price: 0,
      favourited: false,
      image: '',
      isInList: false,
      notes: '',
      store: '',
    });
  }
}
