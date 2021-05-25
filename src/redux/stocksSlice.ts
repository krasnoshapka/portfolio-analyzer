import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Stock {
  symbol: string,
  longName: string,
  currencySymbol: string,
  price: number
}

interface StocksState {
  stocks: Stock[]
}

const initialState: StocksState = {
  stocks: []
}

export const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    stocksSummary(state, { payload }: PayloadAction<Stock>) {
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
export const { stocksSummary } = stocksSlice.actions;

export default stocksSlice.reducer;