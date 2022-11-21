import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './boardSlice';
import listsSlice from './listsSlice';
import cardsSlice from './cardsSlice';
import throttle from 'lodash.throttle';
import dummyData from './dummyData';

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
    listsById: listsSlice.reducer,
    cardsById: cardsSlice.reducer,
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
