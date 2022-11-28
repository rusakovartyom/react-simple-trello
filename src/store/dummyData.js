import shortid from 'shortid';
import { addList } from './boardSlice';
import { addCard } from './listsSlice';

const dummyData = (store) => {
  const dummyLists = {
    'First List': ['First card', 'Second card'],
    'Second List': ['Card 1', 'Card 2'],
  };

  const dispatchDummyData = (lists) => {
    for (const list in lists) {
      const listId = shortid.generate();
      store.dispatch(addList({ listId: listId, listTitle: list }));
      for (const card of lists[list]) {
        const cardId = shortid.generate();
        store.dispatch(
          addCard({
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
