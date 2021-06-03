export default interface Stock {
  symbol: string;
  longName: string;
  currencySymbol: string;
  price: number;
  pe: number;
}

export interface PortfolioItem {
  symbol: string;
  amount: number;
}