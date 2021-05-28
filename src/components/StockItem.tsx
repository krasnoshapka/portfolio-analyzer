import React from "react";
import Stock from "../models/stocks";

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