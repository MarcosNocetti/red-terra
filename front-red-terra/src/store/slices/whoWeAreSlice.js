import { createSlice } from '@reduxjs/toolkit';

const whoWeAreSlice = createSlice({
  name: 'whoWeAre',
  initialState: {
    whoWeAre: null,
    loading: false,
    error: null,
  },
  reducers: {
    setWhoWeAre: (state, action) => {
      state.whoWeAre = action.payload;
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

export const { setWhoWeAre, setLoading, setError } = whoWeAreSlice.actions;
export default whoWeAreSlice.reducer;
