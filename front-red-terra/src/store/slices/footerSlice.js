import { createSlice } from '@reduxjs/toolkit';

const footerSlice = createSlice({
  name: 'footer',
  initialState: {
    footer: null,
    loading: false,
    error: null,
  },
  reducers: {
    setFooter: (state, action) => {
      state.footer = action.payload;
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

export const { setFooter, setLoading, setError } = footerSlice.actions;
export default footerSlice.reducer;
