import TextareaAutosize from 'react-textarea-autosize';

import styles from './ListEditor.module.css';

const ListEditor = (props) => {
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      props.saveList();
    }
  };

  return (
    <div className={styles.listTitleEdit}>
      <TextareaAutosize
        className={styles.listTitleTextarea}
        autoFocus
        placeholder="Enter list title..."
        value={props.title}
        onChange={props.handleChangeTitle}
        onKeyDown={onEnter}
      />
      {props.deleteList && (
        <div className={styles.listTitleDelete} onClick={props.deleteList}>
          <ion-icon name="trash" />
        </div>
      )}
    </div>
  );
};
export default ListEditor;
