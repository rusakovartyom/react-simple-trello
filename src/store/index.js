import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './board-slice';
import listsSlice from './lists-slice';
import cardsSlice from './cards-slice';
import throttle from 'lodash.throttle';
import dummyData from './dummy-data';

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
    lists: listsSlice.reducer,
    cards: cardsSlice.reducer,
  },
  preloadedState: persistedState,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

console.log(store.getState());
if (!store.getState().board.lists.length) {
  console.log('SEED');
  dummyData(store);
}

export default store;
