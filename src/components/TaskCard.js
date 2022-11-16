import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from './Card';

const TaskCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const card = useSelector((state) => state.cardsById[props.cardId]);
  const dispatch = useDispatch();

  return <Card>{card.text}</Card>;
};
export default TaskCard;
