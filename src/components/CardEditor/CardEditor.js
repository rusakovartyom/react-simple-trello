import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import EditButtons from '../EditButtons';

import styles from './CardEditor.module.css';

const CardEditor = (props) => {
  const [text, setText] = useState(props.text || '');

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      props.onSave(text);
    }
  };

  return (
    <div className={styles.EditCard}>
      <div className={styles.EditCardWrapper}>
        <TextareaAutosize
          autoFocus
          className={styles.EditCardTextarea}
          placeholder="Enter the text for this card..."
          value={text}
          onChange={handleChangeText}
          onKeyDown={onEnter}
        />
      </div>
      <EditButtons
        handleSave={() => props.onSave(text)}
        saveLabel={props.adding ? 'Add card' : 'Save'}
        handleDelete={props.onDelete}
        handleCancel={props.onCancel}
      />
    </div>
  );
};
export default CardEditor;
