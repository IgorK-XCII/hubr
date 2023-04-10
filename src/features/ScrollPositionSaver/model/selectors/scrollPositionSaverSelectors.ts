import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers';

export const getScrollSaverPosition = (state: RootState) => state.scroll.scroll;
export const getScrollSaverPositionByPath = createSelector(
  getScrollSaverPosition,
  (state: RootState, path: string) => path,
  (scroll, path) => scroll[path] ?? 0,
);
