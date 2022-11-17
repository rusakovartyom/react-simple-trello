import { useState } from 'react';
import { useSelector } from 'react-redux';

import List from './List';
import AddList from './AddList';

import styles from './Board.module.css';

const Board = () => {
  const [isAddingList, setIsAddingList] = useState(false);
  const board = useSelector((state) => state.board);

  const toggleAddingList = () => {
    setIsAddingList(!isAddingList);
  };

  return (
    <div className={styles.Board}>
      {board.lists.map((listId, index) => (
        <List listId={listId} key={listId} index={index} />
      ))}
      <div className={styles.AddList}>
        {isAddingList ? (
          <AddList toggleAddingList={toggleAddingList} />
        ) : (
          <div className={styles.AddListButton} onClick={toggleAddingList}>
            <ion-icon name="add" /> Add a list
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
