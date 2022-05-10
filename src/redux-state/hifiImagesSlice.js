import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], status: 'empty' };

export const loadHifiImages = createAsyncThunk('hifiImages/load', () =>
  fetch(
    'https://outlier.oliversturm.com:11234/https://www.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=hifi',
    { headers: { Authorization: 'Basic ' + btoa('corsuser:Ct%x6cPJJ') } },
  )
    .then((response) => response.text())
    .then((text) => text.slice(1, -1)) // remove extra parens
    .then((text) => JSON.parse(text))
    .then(({ items }) => items),
);

export const hifiImagesSlice = createSlice({
  name: 'hifiImages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadHifiImages.fulfilled, (state, action) => {
      state.items = Array.from(action.payload);
      state.status = 'loaded';
    });
    builder.addCase(loadHifiImages.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(loadHifiImages.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error;
    });
  },
});

export default hifiImagesSlice.reducer;
