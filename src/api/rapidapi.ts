import {Stock} from "../redux/stocksSlice";

async function getStockSummary(symbol: string) {
  const response = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${symbol}&region=GB`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "3cd73c018bmsh0de2957b5737971p15a074jsn690f2d899f47",
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    }
  });
  const data = await response.json();
  return {
    symbol: data.price.symbol,
    longName: data.price.longName,
    currencySymbol: data.price.currencySymbol,
    price: data.price.regularMarketPrice.raw
  } as Stock;
}

export default {getStockSummary};