import { createSlice } from '@reduxjs/toolkit';
import { deleteList } from './boardSlice';
import { addCard, deleteCard } from './listsSlice';

const initialCardsState = {};

const cardsSlice = createSlice({
  name: 'cardsById',
  initialState: initialCardsState,
  reducers: {
    changeCardText: (state, action) => {
      const { cardText, cardId } = action.payload;
      return { ...state, [cardId]: { ...state[cardId], text: cardText } };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteList, (state, action) => {
        const { cards: cardIds } = action.payload;
        return Object.keys(state)
          .filter((cardId) => !cardIds.includes(cardId))
          .reduce(
            (newState, cardId) => ({ ...newState, [cardId]: state[cardId] }),
            {}
          );
      })
      .addCase(addCard, (state, action) => {
        const { cardText, cardId } = action.payload;
        return { ...state, [cardId]: { text: cardText, _id: cardId } };
      })
      .addCase(deleteCard, (state, action) => {
        const { cardId } = action.payload;
        const { [cardId]: deletedCard, ...restOfCards } = state;
        return restOfCards;
      });
  },
});

export const cardsActions = cardsSlice.actions;

export default cardsSlice;
