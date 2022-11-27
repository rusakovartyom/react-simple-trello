import TextareaAutosize from 'react-textarea-autosize';

import styles from './styles.module.css';

const ListEditor = ({ saveList, title, handleChangeTitle, deleteList }) => {
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      saveList();
    }
  };

  return (
    <div className={styles.listTitleEdit}>
      <TextareaAutosize
        className={styles.listTitleTextarea}
        autoFocus
        placeholder="Enter list title..."
        value={title}
        onChange={handleChangeTitle}
        onKeyDown={onEnter}
      />
      {deleteList && (
        <div className={styles.listTitleDelete} onClick={deleteList}>
          <ion-icon name="trash" />
        </div>
      )}
    </div>
  );
};
export default ListEditor;
