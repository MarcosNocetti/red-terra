import { createSlice } from '@reduxjs/toolkit';

const awardsSlice = createSlice({
  name: 'awards',
  initialState: {
    awards: null,
    loading: false,
    error: null,
  },
  reducers: {
    setAwards: (state, action) => {
      state.awards = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setAwards, setLoading, setError } = awardsSlice.actions;
export default awardsSlice.reducer;
