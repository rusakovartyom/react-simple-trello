import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from './Card';

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
};
export default TaskCard;
