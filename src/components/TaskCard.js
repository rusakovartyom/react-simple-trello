import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cardsActions } from '../store/cards-slice';
import { listsActions } from '../store/lists-slice';

import Card from './Card';
import CardEditor from './CardEditor';

import styles from './TaskCard.module.css';

const TaskCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const card = useSelector((state) => state.cardsById[props.cardId]);
  const dispatch = useDispatch();

  const startHover = () => {
    setIsHovered(true);
  };
  const endHover = () => {
    setIsHovered(false);
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
    const { listId } = props;

    dispatch(cardsActions.deleteCard({ cardId: card._id, listId }));
    dispatch(listsActions.deleteCard({ cardId: card._id, listId }));
  };

  if (!isEditing) {
    return (
      <Card onMouseEnter={startHover} onMouseLeave={endHover}>
        {isHovered && (
          <div className={styles.CardIcons}>
            <div
              className={styles.CardIcon}
              onClick={startEditing}
              title="Edit"
            >
              <ion-icon name="pencil-sharp" />
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
