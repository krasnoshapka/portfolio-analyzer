import Stock from "../models/stocks";

const API_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com";
const API_KEY = "3cd73c018bmsh0de2957b5737971p15a074jsn690f2d899f47";
const API_HOST = "apidojo-yahoo-finance-v1.p.rapidapi.com";

async function getStockSummary(symbol: string): Promise<Stock> {
  const response = await fetch(`${API_URL}/stock/v2/get-summary?symbol=${symbol}&region=GB`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST
    }
  });
  const data = await response.json();
  return {
    symbol: data.price.symbol,
    longName: data.price.longName,
    currencySymbol: data.price.currencySymbol,
    price: data.price.regularMarketPrice.raw
  };
}

export default {getStockSummary};