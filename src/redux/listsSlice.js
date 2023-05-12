import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lists: [],
};

export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addLists: (state, action) => {
      state.lists.push(action.payload);
      console.log(state.lists);
    },
    deleteLists: (state, action) => {
      state.lists = state.lists.filter(list => list.id !== action.payload);
    },
  },
});

export const { addLists, deleteLists, filteredLists } = listsSlice.actions;
export const listsReducer = listsSlice.reducer;
