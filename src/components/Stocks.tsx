import React, {useEffect} from "react";
import { useAppSelector, useAppDispatch } from '../redux/store';
import StockItem from "./StockItem";
import {PortfolioItem} from "../models/stocks";

const Stocks = () => {
  const {stocks, portfolio} = useAppSelector((state) => state.stocks);
  const dispatch = useAppDispatch();
  
  useEffect( () => {
    portfolio.forEach((item: PortfolioItem) => {
      dispatch({type: 'getStockData', payload: item.symbol});
    });
  }, [portfolio]);
  
  return (
    <div className="stocks">
      {stocks.length && stocks.map(
        (stock) => <StockItem key={stock.symbol} stock={stock} portfolio={portfolio.find((item) => item.symbol === stock.symbol)!} />
      )}
    </div>
  );
};

export default Stocks;