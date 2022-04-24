export interface HistoricalPrice {
  price: number;
  date: Date;
}

export interface FoodItem {
  name: string;
  brand: string;
  price: number;
  purchased: boolean;
  notes: string;
  prices: HistoricalPrice[];
  store: string;
  image: string;
}
