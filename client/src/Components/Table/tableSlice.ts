import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

interface ABtest {
  id: number;
  name: string;
  type: string;
  status: string;
  siteId: number;
}

interface TableState {
  ABtests: ABtest[];
}

const initialState: TableState = {
  ABtests: [],
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    getABtests: (state, action: PayloadAction<ABtest[]>) => {
      state.ABtests = action.payload;
    },
  },
});

export const getABtestsThunk = (): AppThunk => async (dispatch) => {
  console.log('111');
  try {
    const response = await fetch('http://localhost:3100/tests');
    const result: ABtest[] = await response.json();

    console.log(result);

    dispatch(getABtests(result));
  } catch (error) {
    console.log(error);
  }
};

export const { getABtests } = tableSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectABtests = (state: RootState) => state.table.ABtests;

export default tableSlice.reducer;
