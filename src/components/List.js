import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TaskCard from './TaskCard';
import CardEditor from './CardEditor';
import shortid from 'shortid';
import { listsActions } from '../store/lists-slice';
import { cardsActions } from '../store/cards-slice';

import styles from './List.module.css';

const List = (props) => {
  const [addingCard, setAddingCard] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.listsById[props.listId]);

  const toggleAddingCard = () => {
    setAddingCard(!addingCard);
  };

  const handleAddCard = (cardText) => {
    const listId = list._id;

    toggleAddingCard();

    const cardId = shortid.generate();

    dispatch(listsActions.addCard({ cardId, listId }));
    dispatch(cardsActions.addCard({ cardId, listId, cardText }));
  };

  return (
    <div className={styles.List}>
      <div className={styles.Title}>{list.title}</div>

      {list.cards &&
        list.cards.map((cardId, index) => (
          <TaskCard
            key={cardId}
            cardId={cardId}
            index={index}
            listId={list._id}
          />
        ))}
    </div>
  );
};
export default List;
