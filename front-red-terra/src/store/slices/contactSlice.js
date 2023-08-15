import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contact: null,
    loading: false,
    error: null,
  },
  reducers: {
    setContact: (state, action) => {
      state.contact = action.payload;
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

export const { setContact, setLoading, setError } = contactSlice.actions;
export default contactSlice.reducer;
