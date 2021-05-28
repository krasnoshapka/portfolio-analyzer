import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import stocksReducer from './stocksSlice';
import baseSlice from "./baseSlice";
import createSagaMiddleware from 'redux-saga';
import sagaWatcher from "./sagas";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    stocks: stocksReducer,
    base: baseSlice,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), saga] as const
});

saga.run(sagaWatcher);

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;