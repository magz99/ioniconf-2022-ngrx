export interface HistoricalPrice {
  price: number;
  date: Date;
}

export interface GroceryItem {
  name: string;
  brand: string;
  favourited: boolean;
  price: number;
  purchased: boolean;
  notes: string;
  prices: HistoricalPrice[];
  store: string;
  image: string;
  itemId: string;
  isInList: boolean;
}
