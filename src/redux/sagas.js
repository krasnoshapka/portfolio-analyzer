import {takeEvery, put, call, race, take} from 'redux-saga/effects';
import api from "../api/rapidapi";
import {stocksData} from "./stocksSlice";
import {setLoading} from "./baseSlice";

export default function* sagaWatcher() {
  // Get all portfolio data or cancel it
  yield takeEvery('getPortfolioData', getPortfolioData);

  // We might want to get individual stock data as well
  yield takeEvery('getStockData', getStockData);
}

function* getPortfolioData(action) {
  for (let item of action.payload) {
    yield put({type: 'getStockData', payload: item.symbol});
  }
}

function* getStockData(action) {
  yield put(setLoading(true));

  try {
    // TODO: for some reason next call() doesn't work in TS due to error:
    // Argument of type '(symbol: string) => Promise<Stock>' is not assignable to parameter of type '{ context: unknown; fn: (this: unknown, ...args: any[]) => any; }'.
    //     Type '(symbol: string) => Promise<Stock>' is missing the following properties from type '{ context: unknown; fn: (this: unknown, ...args: any[]) => any; }': context, fn  TS2769
    const {data, cancel} = yield race({
      data: call(api.getStockData, action.payload),
      cancel: take('cancelOngoingRequest')
    });
    if (!cancel) {
      yield put(stocksData(data));
    }
  } catch (err) {
    console.log(err);
    // TODO: dispatch error action here
  }

  yield put(setLoading(false));
}
