import {takeEvery, put, call} from 'redux-saga/effects';
import api from "../api/rapidapi";
import {stocksSummary} from "./stocksSlice";
import {setLoading} from "./baseSlice";

export default function* sagaWatcher() {
  yield takeEvery('getStockSummary', getStockSummary);
}

function* getStockSummary(action) {
  yield put(setLoading(true));

  try {
    // TODO: for some reason next call() doesn't work in TS due to error:
    // Argument of type '(symbol: string) => Promise<Stock>' is not assignable to parameter of type '{ context: unknown; fn: (this: unknown, ...args: any[]) => any; }'.
    //     Type '(symbol: string) => Promise<Stock>' is missing the following properties from type '{ context: unknown; fn: (this: unknown, ...args: any[]) => any; }': context, fn  TS2769
    const stock = yield call(api.getStockSummary, action.payload);
    yield put(stocksSummary(stock));
  } catch (err) {
    console.log(err);
  }

  yield put(setLoading(false));
}
