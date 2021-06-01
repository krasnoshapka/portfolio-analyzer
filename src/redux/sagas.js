import {takeEvery, put, call} from 'redux-saga/effects';
import api from "../api/rapidapi";
import {stocksData} from "./stocksSlice";
import {setLoading} from "./baseSlice";

export default function* sagaWatcher() {
  yield takeEvery('getStockData', getStockData);
}

function* getStockData(action) {
  yield put(setLoading(true));

  try {
    // TODO: for some reason next call() doesn't work in TS due to error:
    // Argument of type '(symbol: string) => Promise<Stock>' is not assignable to parameter of type '{ context: unknown; fn: (this: unknown, ...args: any[]) => any; }'.
    //     Type '(symbol: string) => Promise<Stock>' is missing the following properties from type '{ context: unknown; fn: (this: unknown, ...args: any[]) => any; }': context, fn  TS2769
    const stock = yield call(api.getStockSummary, action.payload);

    const stats = yield call(api.getStockStatistics, action.payload);

    yield put(stocksData({...stock, ...stats}));
  } catch (err) {
    console.log(err);
  }

  yield put(setLoading(false));
}
