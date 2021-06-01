import React, {useEffect} from "react";
import { useAppSelector, useAppDispatch } from '../redux/store';
import StockItem from "./StockItem";

const Stocks = () => {
  const {stocks, portfolio} = useAppSelector((state) => state.stocks);
  const dispatch = useAppDispatch();
  
  useEffect( () => {
    portfolio.forEach((symbol: string) => {
      dispatch({type: 'getStockData', payload: symbol});
    });
  }, []);
  
  
  return (
    <div>
      {stocks.length && stocks.map((stock) => <StockItem key={stock.symbol} stock={stock} />)}
    </div>
  );
};

export default Stocks;