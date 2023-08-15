import { createSlice } from '@reduxjs/toolkit';

const whatWeDoSlice = createSlice({
  name: 'whatWeDo',
  initialState: {
    whatWeDo: null,
    loading: false,
    error: null,
  },
  reducers: {
    setWhatWeDo: (state, action) => {
      state.whatWeDo = action.payload;
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

export const { setWhatWeDo, setLoading, setError } = whatWeDoSlice.actions;
export default whatWeDoSlice.reducer;
