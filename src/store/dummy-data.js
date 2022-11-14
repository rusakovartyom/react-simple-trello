import shortid from 'shortid';
import { boardActions } from './board-slice';
import { listsActions } from './lists-slice';
import { cardsActions } from './cards-slice';

const dummyData = (store) => {
  const dummyLists = {
    'First List': ['First card', 'Second card'],
    'Second List': ['Card 1', 'Card 2'],
  };

  const dispatchDummyData = (lists) => {
    for (const list in lists) {
      const listId = shortid.generate();
      store.dispatch(boardActions.addList({ listId: listId }));
      store.dispatch(listsActions.addList({ listId: listId, listTitle: list }));
      for (const card of lists[list]) {
        const cardId = shortid.generate();
        store.dispatch(
          listsActions.addCard({
            listId: listId,
            cardId: cardId,
          })
        );
        store.dispatch(
          cardsActions.addCard({
            listId: listId,
            cardId: cardId,
            cardText: card,
          })
        );
      }
    }
  };
  dispatchDummyData(dummyLists);
};

export default dummyData;
