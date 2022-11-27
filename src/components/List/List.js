import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import TaskCard from 'components/TaskCard';
import CardEditor from 'components/CardEditor';
import ListEditor from 'components/ListEditor';
import shortid from 'shortid';
import { deleteList } from 'store/boardSlice';
import { addCard, changeListTitle } from 'store/listsSlice';

import styles from './List.module.css';

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

    dispatch(addCard({ cardId, listId, cardText }));
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

    dispatch(changeListTitle({ listId, listTitle: title }));
  };

  const handleDeleteList = async () => {
    const { listId } = props;
    console.log(listId);

    dispatch(deleteList({ listId, cards: list.cards }));
  };

  return (
    <Draggable draggableId={props.listId} index={props.index}>
      {(provided, _snapshot) => (
        <div
          className={styles.list}
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
              deleteList={handleDeleteList}
            />
          ) : (
            <div className={styles.title} onClick={toggleEditingTitle}>
              {list.title}
            </div>
          )}
          <Droppable droppableId={list._id}>
            {(provided, _snapshot) => (
              <div ref={provided.innerRef}>
                {list.cards &&
                  list.cards.map((cardId, index) => (
                    <TaskCard
                      key={cardId}
                      cardId={cardId}
                      index={index}
                      listId={list._id}
                    />
                  ))}
                {provided.placeholder}
                {addingCard ? (
                  <CardEditor
                    onSave={handleAddCard}
                    onCancel={toggleAddingCard}
                    adding
                  />
                ) : (
                  <button
                    className={styles.toggleAddCard}
                    onClick={toggleAddingCard}
                  >
                    <ion-icon name="add" />
                    Add a card
                  </button>
                )}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
export default List;
