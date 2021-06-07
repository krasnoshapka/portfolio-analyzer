import React from "react";
import { useAppSelector } from '../redux/store';
import StockItem from "./StockItem";

const Stocks = () => {
  const {stocks, portfolio} = useAppSelector((state) => state.stocks);
  
  return (
    <div className="stocks">
      {stocks.length && stocks.map(
        (stock) => <StockItem key={stock.symbol} stock={stock} portfolio={portfolio.find((item) => item.symbol === stock.symbol)!} />
      )}
    </div>
  );
};

export default Stocks;