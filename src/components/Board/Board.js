import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { moveList } from 'store/boardSlice';
import { moveCard } from 'store/listsSlice';
import { column } from 'const';

import List from 'components/List';
import AddList from 'components/AddList';

import styles from './Board.module.css';

const Board = (props) => {
  const [isAddingList, setIsAddingList] = useState(false);
  const board = useSelector((state) => state.board);
  const dispatch = useDispatch();

  const toggleAddingList = () => {
    setIsAddingList(!isAddingList);
  };

  const handleDragEnd = ({ source, destination, type }) => {
    // Return list if it was dropped outside of allowed zones
    if (!destination) return;
    // Move list
    if (type === column) {
      // Prevent update if nothing got changed
      if (source.index !== destination.index) {
        dispatch(
          moveList({
            oldListIndex: source.index,
            newListIndex: destination.index,
          })
        );
      }
      return;
    }
    // Move card
    if (
      source.index !== destination.index ||
      source.droppableId !== destination.droppableId
    ) {
      dispatch(
        moveCard({
          oldCardIndex: source.index,
          newCardIndex: destination.index,
          sourceListId: source.droppableId,
          destListId: destination.droppableId,
        })
      );
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type={column}>
        {(provided, _snapshot) => (
          <div className={styles.board} ref={provided.innerRef}>
            {board.lists.map((listId, index) => (
              <List listId={listId} key={listId} index={index} />
            ))}

            {provided.placeholder}

            <div className={styles.addList}>
              {isAddingList ? (
                <AddList toggleAddingList={toggleAddingList} />
              ) : (
                <button className={styles.button} onClick={toggleAddingList}>
                  <ion-icon name="add" />
                  <span>Add a list</span>
                </button>
              )}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
