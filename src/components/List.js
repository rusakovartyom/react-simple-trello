import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import TaskCard from './TaskCard';
import CardEditor from './CardEditor';
import ListEditor from './ListEditor';
import shortid from 'shortid';
import { listsActions } from '../store/lists-slice';
import { cardsActions } from '../store/cards-slice';

import styles from './List.module.css';
import { boardActions } from '../store/board-slice';

const List = (props) => {
  const list = useSelector((state) => state.listsById[props.listId]);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(list.title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [addingCard, setAddingCard] = useState(false);

  const toggleAddingCard = () => {
    setAddingCard(!addingCard);
  };

  const handleAddCard = async (cardText) => {
    const { listId } = props;

    toggleAddingCard();

    const cardId = shortid.generate();

    dispatch(listsActions.addCard({ cardId, listId }));
    dispatch(cardsActions.addCard({ cardId, listId, cardText }));
  };

  const toggleEditingTitle = () => {
    setIsEditingTitle(!isEditingTitle);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const editListTitle = async () => {
    const { listId } = props;

    toggleEditingTitle();

    dispatch(listsActions.changeListTitle({ listId, listTitle: title }));
  };

  const deleteList = async () => {
    const { listId } = props;
    console.log(listId);

    dispatch(boardActions.deleteList({ listId }));
    dispatch(listsActions.deleteList({ listId }));
    dispatch(cardsActions.deleteList({ listId, cards: list.cards }));
  };

  return (
    <Draggable draggableId={props.listId} index={props.index}>
      {(provided, _snapshot) => (
        <div
          className={styles.List}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {isEditingTitle ? (
            <ListEditor
              list={list}
              title={title}
              handleChangeTitle={handleChangeTitle}
              saveList={editListTitle}
              onClickOutside={editListTitle}
              deleteList={deleteList}
            />
          ) : (
            <div className={styles.Title} onClick={toggleEditingTitle}>
              {list.title}
            </div>
          )}

          {list.cards &&
            list.cards.map((cardId, index) => (
              <TaskCard
                key={cardId}
                cardId={cardId}
                index={index}
                listId={list._id}
              />
            ))}

          {addingCard ? (
            <CardEditor
              onSave={handleAddCard}
              onCancel={toggleAddingCard}
              adding
            />
          ) : (
            <button className={styles.ToggleAddCard} onClick={toggleAddingCard}>
              <ion-icon name="add" />
              Add a card
            </button>
          )}
        </div>
      )}
    </Draggable>
  );
};
export default List;
