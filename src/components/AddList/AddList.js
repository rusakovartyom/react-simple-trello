import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from 'store/boardSlice';
import shortid from 'shortid';

import EditButtons from 'components/EditButtons';
import ListEditor from 'components/ListEditor';

import styles from './AddList.module.css';

const AddList = (props) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const ref = useRef();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const createList = async () => {
    props.toggleAddingList();

    const listId = shortid.generate();

    dispatch(addList({ listId, listTitle: title }));
  };

  // Custom hook for detecting click outside of the element
  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);
  };

  // Calling hook
  useOnClickOutside(ref, () => props.toggleAddingList(false));

  return (
    <div className={styles.addList} ref={ref}>
      <ListEditor
        title={title}
        handleChangeTitle={handleChangeTitle}
        onClickOutside={props.toggleAddingList}
        saveList={createList}
      />
      <EditButtons
        handleSave={createList}
        handleCancel={props.toggleAddingList}
        saveLabel="Add list"
      />
    </div>
  );
};
export default AddList;
