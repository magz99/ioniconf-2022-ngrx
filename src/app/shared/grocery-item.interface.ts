export interface HistoricalPrice {
  price: number;
  date: Date;
}

export interface GroceryItem {
  name: string;
  brand: string;
  price: number;
  notes: string;
  prices: HistoricalPrice[];
  store: string;
  image: string;
  itemId: string;
}
