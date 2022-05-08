import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  QuerySnapshot,
} from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { FirestoreService } from '../firestore/firestore.service';
import { ShoppingItem } from '../shared/food-item.interface';
import { INITIAL_DATA } from './mock-data';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private readonly firestoreService: FirestoreService) {}

  fetchItems(): Observable<ShoppingItem[]> {
    return of(INITIAL_DATA.items);
  }

  addItem(newItem: ShoppingItem): void {
    this.firestoreService.addItemToCollection(newItem);
  }

  removeItem(): void {}

  toggleFavourite(itemId): void {
    this.firestoreService.toggleFavourite(itemId);
  }

  toggleToShoppingList(itemId): void {
    this.firestoreService.toggleInShoppingList(itemId);
  }

  clearList(): void {
    this.firestoreService.clearList();
  }
}
