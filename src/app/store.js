import { configureStore } from '@reduxjs/toolkit';
import currentChapterDataSlice from '../features/currentChapterDataSlice';
import currentCategoryActiveSlice from '../features/Articles/currentCategoryActiveSlice';

export const store = configureStore({
    reducer: {
        currentChapterDataSlice,
        currentCategoryActiveSlice
    },
  })