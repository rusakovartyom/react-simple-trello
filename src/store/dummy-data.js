import shortid from 'shortid';
import { boardActions } from './board-slice';
import { listsActions } from './lists-slice';
import { cardsActions } from './cards-slice';

const dummyData = (store) => {
  const firstListId = shortid.generate();

  store.dispatch(boardActions.addList({ listId: firstListId }));
  store.dispatch(
    listsActions.addList({ listId: firstListId, listTitle: 'First List' })
  );

  store.dispatch(
    listsActions.addCard({
      listId: firstListId,
      cardId: shortid.generate(),
    })
  );

  store.dispatch(
    cardsActions.addCard({
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: 'First card',
    })
  );

  store.dispatch(
    listsActions.addCard({
      listId: firstListId,
      cardId: shortid.generate(),
    })
  );

  store.dispatch(
    cardsActions.addCard({
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: 'Second card',
    })
  );

  const secondListId = shortid.generate();

  store.dispatch(boardActions.addList({ listId: secondListId }));
  store.dispatch(
    listsActions.addList({ listId: secondListId, listTitle: 'Second List' })
  );

  store.dispatch(
    listsActions.addCard({
      listId: secondListId,
      cardId: shortid.generate(),
    })
  );

  store.dispatch(
    cardsActions.addCard({
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: 'Card 1',
    })
  );

  store.dispatch(
    listsActions.addCard({
      listId: secondListId,
      cardId: shortid.generate(),
    })
  );

  store.dispatch(
    cardsActions.addCard({
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: 'Card 2',
    })
  );
};

export default dummyData;
