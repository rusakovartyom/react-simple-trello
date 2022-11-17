import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { boardActions } from '../store/board-slice';
import { listsActions } from '../store/lists-slice';
import shortid from 'shortid';

import EditButtons from './EditButtons';

import styles from './AddList.module.css';

  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  return (
    <div className={styles.AddList}>
      <div>List Editor</div>
      <EditButtons />
    </div>
  );
};
export default AddList;
