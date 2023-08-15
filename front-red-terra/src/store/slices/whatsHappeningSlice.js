import { createSlice } from '@reduxjs/toolkit';

const whatsHappeningSlice = createSlice({
  name: 'whatsHappening',
  initialState: {
    whatsHappening: null,
    loading: false,
    error: null,
  },
  reducers: {
    setWhatsHappening: (state, action) => {
      state.whatsHappening = action.payload;
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

export const { setWhatsHappening, setLoading, setError } = whatsHappeningSlice.actions;
export default whatsHappeningSlice.reducer;
