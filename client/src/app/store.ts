import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchReducer from '../Components/Search/searchSlice';
import tableReducer from '../Components/Table/tableSlice';

export const store = configureStore({
  reducer: {
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
