import { useState } from 'react';

import Card from './Card';

const TaskCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const card = useSelector((state) => state.cardsById[props.cardId]);

  return <Card>{card.text}</Card>;
};
export default TaskCard;
