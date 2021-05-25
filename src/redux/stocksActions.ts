import { Dispatch } from 'react';
import api from "../api/rapidapi";
import {stocksSummary} from './stocksSlice';

export const getStockSummary = (symbol: string) => async (
  dispatch: Dispatch<any>,
) => {
  try {
    // TODO: dispatch loading true
    const stock = await api.getStockSummary(symbol);
    dispatch(stocksSummary(stock));
  } catch (err) {
    console.log(err);
    // TODO: dispatch error
  }
  // TODO: dispatch loading false
}