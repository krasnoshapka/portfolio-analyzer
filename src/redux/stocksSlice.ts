import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Stock from "../models/stocks";

interface StocksState {
  stocks: Stock[];
  portfolio: string[]
}

const initialState: StocksState = {
  stocks: [],
  portfolio: ['tsla', 'aapl']
}

export const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    stocksData(state, { payload }: PayloadAction<Stock>) {
      const index = state.stocks.findIndex((item) => item.symbol === payload.symbol);
      if (index !== -1) {
        state.stocks[index] = payload;
      } else {
        state.stocks.push(payload);
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { stocksData } = stocksSlice.actions;

export default stocksSlice.reducer;