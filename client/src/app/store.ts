import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchReducer from '../Components/Search/searchSlice';
import counterReducer from '../Components/Counter/counterSlice';
import tableReducer from '../Components/Table/tableSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    table: tableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
