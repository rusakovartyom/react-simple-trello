import { createSlice } from '@reduxjs/toolkit';

const initialBoardState = {
  lists: [],
};

const boardSlice = createSlice({
  name: 'board',
  initialState: initialBoardState,
  reducers: {
    addList: (state, action) => {
      const { listId } = action.payload;
      state.lists.push(listId);
    },
    moveList: (state, action) => {
      const { oldListIndex, newListIndex } = action.payload;
      const newLists = Array.from(state.lists);
      const [removedList] = newLists.splice(oldListIndex, 1);
      newLists.splice(newListIndex, 0, removedList);
      return { lists: newLists };
    },
    deleteList: (state, action) => {
      const { listId } = action.payload;
      const filterDeleted = (tmpListId) => tmpListId !== listId;
      const newLists = state.lists.filter(filterDeleted);
      return { lists: newLists };
    },
  },
});

export const { addList, moveList, deleteList } = boardSlice.actions;

export default boardSlice;
