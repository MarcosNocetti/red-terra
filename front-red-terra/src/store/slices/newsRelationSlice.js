import { createSlice } from "@reduxjs/toolkit";

const newsRelationSlice = createSlice({
  name: "newsRelation",
  initialState: {
    newsRelation: null,
    loading: false,
    error: null,
  },
  reducers: {
    setNewsRelation: (state, action) => {
      state.newsRelation = action.payload;
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

export const { setNewsRelation, setLoading, setError } =
  newsRelationSlice.actions;
export default newsRelationSlice.reducer;
