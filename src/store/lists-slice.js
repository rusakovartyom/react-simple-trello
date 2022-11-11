import { createSlice } from '@reduxjs/toolkit';

const initialListsState = {};

const listsSlice = createSlice({
  name: 'lists',
  initialState: initialListsState,
  reducers: {
    addList: (state, action) => {
      const { listId, listTitle } = action.payload;
      return {
        ...state,
        [listId]: { _id: listId, title: listTitle, cards: [] },
      };
    },
    changeListTitle: (state, action) => {
      const { listId, listTitle } = action.payload;
      return {
        ...state,
        [listId]: { ...state[listId], title: listTitle },
      };
    },
    deleteList: (state, action) => {
      const { listId } = action.payload;
      const { [listId]: deletedList, ...restOfLists } = state;
      return restOfLists;
    },
    addCard: (state, action) => {
      const { listId, cardId } = action.payload;
      return {
        ...state,
        [listId]: { ...state[listId], cards: [...state[listId].cards, cardId] },
      };
    },
    moveCard: (state, action) => {
      const { oldCardIndex, newCardIndex, sourceListId, destListId } =
        action.payload;
      // Move within the same list
      if (sourceListId === destListId) {
        const newCards = Array.from(state[sourceListId].cards);
        const [removedCard] = newCards.splice(oldCardIndex, 1);
        newCards.splice(newCardIndex, 0, removedCard);
        return {
          ...state,
          [sourceListId]: { ...state[sourceListId], cards: newCards },
        };
      }
      // Move card from one list to another
      const sourceCards = Array.from(state[sourceListId].cards);
      const [removedCard] = sourceCards.splice(oldCardIndex, 1);
      const destinationCards = Array.from(state[destListId].cards);
      destinationCards.splice(newCardIndex, 0, removedCard);
      return {
        ...state,
        [sourceListId]: { ...state[sourceListId], cards: sourceCards },
        [destListId]: { ...state[destListId], cards: destinationCards },
      };
    },
    deleteCard: (state, action) => {
      const { cardId: deletedCardId, listId } = action.payload;
      const filterDeleted = (cardId) => cardId !== deletedCardId;
      return {
        ...state,
        [listId]: {
          ...state[listId],
          cards: state[listId].cards.filter(filterDeleted),
        },
      };
    },
  },
});

export const listsActions = listsSlice.actions;

export default listsSlice;
