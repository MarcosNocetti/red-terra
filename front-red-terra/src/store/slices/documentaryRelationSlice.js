import { createSlice } from '@reduxjs/toolkit';

const documentaryRelationSlice = createSlice({
  name: 'documentaryRelation',
  initialState: {
    documentaryRelation: null,
    loading: false,
    error: null,
  },
  reducers: {
    setDocumentaryRelation: (state, action) => {
      state.documentaryRelation = action.payload;
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

export const { setDocumentaryRelation, setLoading, setError } = documentaryRelationSlice.actions;
export default documentaryRelationSlice.reducer;
