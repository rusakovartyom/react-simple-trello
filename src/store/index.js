import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './board-slice';
import listsSlice from './lists-slice';
import cardsSlice from './cards-slice';

const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
    lists: listsSlice.reducer,
    cards: cardsSlice.reducer,
  },
});

export default store;
