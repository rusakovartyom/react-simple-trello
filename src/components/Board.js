import { useState } from 'react';
import { useSelector } from 'react-redux';

import List from './List';

import styles from './Board.module.css';

const Board = () => {
  const [isAddingList, setIsAddingList] = useState(false);
  const board = useSelector((state) => state.board);

  return (
    <div className={styles.Board}>
      {board.lists.map((listId, index) => (
        <List listId={listId} key={listId} index={index} />
      ))}
    </div>
  );
};

export default Board;
