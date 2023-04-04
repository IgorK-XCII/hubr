import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types';

const initialState: AddCommentFormSchema = {
  text: '',
  error: null,
};

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setAddCommentFormText: (state, { payload }: PayloadAction<string>) => {
      state.text = payload;
    },
  },
});

export const {
  actions: addCommentFormActions,
  reducer: addCommentFormReducer,
} = addCommentFormSlice;
