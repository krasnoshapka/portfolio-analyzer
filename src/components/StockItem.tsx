import React from "react";
import {Stock} from '../redux/stocksSlice'

interface StockProps {
  stock: Stock
}

const StockItem = ({stock}: StockProps) => {

  return (
    <div>
      {stock.longName}<br />
      {stock.symbol}<br />
      {stock.currencySymbol}{stock.price}<br />
    </div>
  );
};

export default StockItem;