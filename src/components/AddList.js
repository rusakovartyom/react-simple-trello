import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { boardActions } from '../store/board-slice';
import { listsActions } from '../store/lists-slice';
import shortid from 'shortid';

import EditButtons from './EditButtons';

import styles from './AddList.module.css';

  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const createList = async () => {
    props.toggleAddingList();

    const listId = shortid.generate();

    dispatch(boardActions.addList({ listId }));
    dispatch(listsActions.addList({ listId, listTitle: title }));
  };

  return (
    <div className={styles.AddList}>
      <div>List Editor</div>
      <EditButtons />
    </div>
  );
};
export default AddList;
