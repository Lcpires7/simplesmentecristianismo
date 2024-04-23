import { configureStore } from '@reduxjs/toolkit';
import currentChapterDataSlice from '../features/currentChapterDataSlice';
import currentArticleDataSlice from '../features/Artigo/currentArticleDataSlice';
import currentCategoryActiveSlice from '../features/Artigos/currentCategoryActiveSlice';

export const store = configureStore({
    reducer: {
        currentChapterDataSlice,
        currentArticleDataSlice,
        currentCategoryActiveSlice
    },
  })