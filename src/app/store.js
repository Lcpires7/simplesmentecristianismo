import { configureStore } from '@reduxjs/toolkit';
import currentChapterDataSlice from '../features/currentChapterDataSlice';
import currentArticleDataSlice from '../features/Artigo/currentArticleDataSlice';

export const store = configureStore({
    reducer: {
        currentChapterDataSlice,
        currentArticleDataSlice,
    },
  })