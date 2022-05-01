import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { ItemsStore } from './items.store';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ItemsStore],
})
export class ItemsPage {
  readonly form: FormGroup;
  readonly vm$ = this.store.vm$;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly store: ItemsStore
  ) {
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

  delete(itemId: string): void {}

  addToShoppingList(itemId: string): void {}

  addNewItem(): void {
    console.log('add new item');
  }

  viewDetails(itemId: string): void {
    this.store.viewItemDetails(itemId);
  }

  cancel(): void {
    this.resetValues();
  }

  createItem(): void {
    console.log('createItem');
    console.log('form values: ', this.form.value);
    this.store.addItem(this.form.value);
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
