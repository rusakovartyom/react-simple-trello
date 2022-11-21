import { createSlice } from '@reduxjs/toolkit';

const initialCardsState = {};

const cardsSlice = createSlice({
  name: 'cardsById',
  initialState: initialCardsState,
  reducers: {
    addCard: (state, action) => {
      const { cardText, cardId } = action.payload;
      return { ...state, [cardId]: { text: cardText, _id: cardId } };
    },
    changeCardText: (state, action) => {
      const { cardText, cardId } = action.payload;
      return { ...state, [cardId]: { ...state[cardId], text: cardText } };
    },
    deleteCard: (state, action) => {
      const { cardId } = action.payload;
      const { [cardId]: deletedCard, ...restOfCards } = state;
      return restOfCards;
    },
    deleteList: (state, action) => {
      const { cards: cardIds } = action.payload;
      return Object.keys(state)
        .filter((cardId) => !cardIds.includes(cardId))
        .reduce(
          (newState, cardId) => ({ ...newState, [cardId]: state[cardId] }),
          {}
        );
    },
  },
});

export const cardsActions = cardsSlice.actions;

export default cardsSlice;
