import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from './Card';
import CardEditor from './CardEditor';

const TaskCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const card = useSelector((state) => state.cardsById[props.cardId]);
  const dispatch = useDispatch();

  const startHover = () => {
    setIsHovered(true);
    console.log('Hovering.');
  };
  const endHover = () => {
    setIsHovered(false);
    console.log('Not hovering.');
  };

  const startEditing = () => {
    setIsHovered(false);
    setIsEditing(true);
  };
  const endEditing = () => {
    setIsHovered(true);
    setIsEditing(false);
  };

  const handleEditCard = async (text) => {
    endEditing();

    dispatch(cardsActions.changeCardText({ cardId: card._id, cardText: text }));
  };

  const handleDeleteCard = async () => {
    const { listId, card } = props;

    dispatch(cardsActions.deleteCard({ cardId: card._id, listId }));
    dispatch(listsActions.deleteCard({ cardId: card._id, listId }));
  };

  if (!isEditing) {
    return (
      <Card onMouseEnter={startHover} onMouseLeave={endHover}>
        {isHovered && (
          <div className={styles.CardIcons}>
            <div className={styles.CardIcon} onClick={startEditing}>
              <ion-icon name="pencil" />
            </div>
          </div>
        )}
        {card.text}
      </Card>
    );
  } else {
    return (
      <CardEditor
        text={card.text}
        onSave={handleEditCard}
        onDelete={handleDeleteCard}
        onCancel={endEditing}
      />
    );
  }
};
export default TaskCard;
