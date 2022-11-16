import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
const CardEditor = (props) => {
  const [text, setText] = useState('');

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const onEnter = (e) => {
    const { text } = props;
    if (e.keyCode === 13) {
      e.preventDefault();
      props.onSave(text);
    }
  };

  return (
    <div className={styles.EditCard}>
      <Card>
        <TextareaAutosize
          autoFocus
          className={styles.EditCardTextarea}
          placeholder="Enter the text for new card..."
          value={text}
          onChange={handleChangeText}
          onKeyDown={onEnter}
        />
      </Card>
      <div>Edit Buttons</div>
    </div>
  );
};
export default CardEditor;
