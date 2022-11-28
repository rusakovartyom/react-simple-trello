import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cardsActions } from 'store/cardsSlice';
import { deleteCard } from 'store/listsSlice';
import { Draggable } from 'react-beautiful-dnd';

import Card from 'components/Card';
import CardEditor from 'components/CardEditor';

const TaskCard = ({ listId, index, cardId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const card = useSelector((state) => state.cardsById[cardId]);
  const dispatch = useDispatch();

  const handleStartEditing = () => {
    setIsEditing(true);
  };
  const handleEndEditing = () => {
    setIsEditing(false);
  };

  const handleEditCard = async (text) => {
    handleEndEditing();

    dispatch(cardsActions.changeCardText({ cardId: card._id, cardText: text }));
  };

  const handleDeleteCard = async () => {
    dispatch(deleteCard({ cardId: card._id, listId }));
  };

  if (!isEditing) {
    return (
      <Draggable draggableId={card._id} index={index}>
        {(provided, _snapshot) => (
          <Card
            text={card.text}
            innerRef={provided.innerRef}
            provided={provided}
            onClick={handleStartEditing}
          />
        )}
      </Draggable>
    );
  }

  return (
    <CardEditor
      cardText={card.text}
      onSave={handleEditCard}
      onDelete={handleDeleteCard}
      onCancel={handleEndEditing}
    />
  );
};
export default TaskCard;
