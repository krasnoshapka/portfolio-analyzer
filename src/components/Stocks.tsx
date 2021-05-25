import React, {useEffect} from "react";
import { useAppSelector, useAppDispatch } from '../redux/store';
import StockItem from "./StockItem";
import {getStockSummary} from "../redux/stocksActions";

const portfolio = ['tsla'];

const Stocks = () => {
  const stocks = useAppSelector((state) => state.stocks.stocks);
  const dispatch = useAppDispatch();
  
  useEffect( () => {
    portfolio.forEach((symbol: string) => {
      dispatch(getStockSummary(symbol));
    });
  }, []);
  
  
  return (
    <div>
      {stocks.length && stocks.map((stock) => <StockItem key={stock.symbol} stock={stock} />)}
    </div>
  );
};

export default Stocks;