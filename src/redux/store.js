import { configureStore } from '@reduxjs/toolkit';
import { listsReducer } from './listsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    lists: listsReducer,
    filter: filterReducer,
  },
});
