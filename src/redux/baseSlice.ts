import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BaseState {
  loading: boolean;
}

const initialState: BaseState = {
  loading: false
}

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLoading } = baseSlice.actions;

export default baseSlice.reducer;