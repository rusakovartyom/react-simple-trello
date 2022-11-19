import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { boardActions } from '../store/board-slice';
import { listsActions } from '../store/lists-slice';

import List from './List';
import AddList from './AddList';

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
    if (type === 'COLUMN') {
      // Prevent update if nothing got changed
      if (source.index !== destination.index) {
        dispatch(
          boardActions.moveList({
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
        listsActions.moveCard({
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
      <Droppable droppableId="board" direction="horizontal" type="COLUMN">
        {(provided, _snapshot) => (
          <div className={styles.Board} ref={provided.innerRef}>
            {board.lists.map((listId, index) => (
              <List listId={listId} key={listId} index={index} />
            ))}

            {provided.placeholder}

            <div className={styles.AddList}>
              {isAddingList ? (
                <AddList toggleAddingList={toggleAddingList} />
              ) : (
                <div
                  className={styles.AddListButton}
                  onClick={toggleAddingList}
                >
                  <ion-icon name="add" /> Add a list
                </div>
              )}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
