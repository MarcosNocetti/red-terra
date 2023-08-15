import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'en',
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = state.language === 'en' ? 'br' : 'en';
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
