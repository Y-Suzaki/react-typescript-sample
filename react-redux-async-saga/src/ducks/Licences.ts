import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Licenses = {
  key: string;
  name: string;
  // eslint-disable-next-line camelcase
  spdx_id: string;
  url: string;
  // eslint-disable-next-line camelcase
  node_id: string;
};

export type SliceState = { licenses: Licenses[] };
export const initialState: SliceState = { licenses: [] };

export const licenseSlice = createSlice({
  name: 'license',
  initialState,
  reducers: {
    getLicenses: (state, action: PayloadAction<{ licenses: Licenses[] }>) => ({
      ...state,
      licenses: action.payload.licenses,
      isLoading: false,
    }),
  },
});
