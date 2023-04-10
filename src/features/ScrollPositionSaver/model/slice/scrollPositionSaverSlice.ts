import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollPositionSaverSchema } from '../types';

const initialState: ScrollPositionSaverSchema = {
  scroll: {},
};

const scrollPositionSaverSlice = createSlice({
  name: 'scrollPositionSaver',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      const { path, position } = payload;

      state.scroll[path] = position;
    },
  },
});

export const {
  actions: scrollPositionSaverActions,
  reducer: scrollPositionSaverReducer,
} = scrollPositionSaverSlice;
