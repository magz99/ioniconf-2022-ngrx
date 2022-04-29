export interface HistoricalPrice {
  price: number;
  date: Date;
}

export interface ShoppingItem {
  name: string;
  brand: string;
  price: number;
  purchased: boolean;
  notes: string;
  prices: HistoricalPrice[];
  store: string;
  image: string;
  itemId: string;
  isInList: boolean;
}
