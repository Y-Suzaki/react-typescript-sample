import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterStateToolkit = { count: number };
export const initialStateToolkit: CounterStateToolkit = { count: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialStateToolkit,
  reducers: {
    added: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decremented: (state) => ({ ...state, count: state.count - 1 }),
    incremented: (state) => ({ ...state, count: state.count + 1 }),
  },
});
