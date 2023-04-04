import { RootState } from '@/app/providers';

export const getAddCommentFormText = (state: RootState) => state.addCommentForm?.text ?? '';
export const getAddCommentFormError = (state: RootState) => state.addCommentForm?.error ?? null;
