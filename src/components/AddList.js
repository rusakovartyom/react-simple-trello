import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
