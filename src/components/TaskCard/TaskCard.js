import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cardsActions } from '../../store/cardsSlice';
import { listsActions } from '../../store/listsSlice';
import { Draggable } from 'react-beautiful-dnd';

import Card from '../Card';
import CardEditor from '../CardEditor';

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
    setIsHovered(false);
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
      <Draggable draggableId={card._id} index={props.index}>
        {(provided, _snapshot) => (
          <Card
            onMouseEnter={startHover}
            onMouseLeave={endHover}
            innerRef={provided.innerRef}
            provided={provided}
          >
            {isHovered ? (
              <div className={styles.CardIcons}>
                <div
                  className={styles.CardIcon}
                  onClick={startEditing}
                  title="Edit"
                >
                  <ion-icon name="pencil-sharp" />
                </div>
              </div>
            ) : null}
            {card.text}
          </Card>
        )}
      </Draggable>
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
