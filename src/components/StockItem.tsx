import React from "react";
import Stock, {PortfolioItem} from "../models/stocks";

interface StockProps {
  stock: Stock;
  portfolio: PortfolioItem;
}

const StockItem = ({stock, portfolio}: StockProps) => {

  return (
    <div className="stocks__item">
      <div><strong>{stock.longName}</strong> {stock.symbol}</div>
      <div>PE: {Math.round(stock.pe)}</div>
      <div>Price: {stock.currencySymbol}{stock.price}</div>
      <div>Amount: {portfolio.amount}</div>
      <div>Value: {stock.price * portfolio.amount}</div>
    </div>
  );
};

export default StockItem;