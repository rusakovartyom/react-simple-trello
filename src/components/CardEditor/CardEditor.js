import { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import EditButtons from 'components/EditButtons';

import styles from './styles.module.css';

const CardEditor = ({ cardText, adding, onDelete, onSave, onCancel }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(cardText);
  }, [cardText]);

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSave(text);
    }
  };

  return (
    <>
      <div className={styles.cardEditor}>
        <TextareaAutosize
          autoFocus
          className={styles.textarea}
          placeholder="Enter the text for this card..."
          value={text}
          onChange={handleChangeText}
          onKeyDown={onEnter}
        />
      </div>
      <EditButtons
        handleSave={() => onSave(text)}
        saveLabel={adding ? 'Add card' : 'Save'}
        handleDelete={onDelete}
        handleCancel={onCancel}
      />
    </>
  );
};
export default CardEditor;
