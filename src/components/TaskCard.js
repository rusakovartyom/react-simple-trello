import { useSelector } from 'react-redux';

import Card from './Card';

const TaskCard = (props) => {
  const card = useSelector((state) => state.cardsById[props.cardId]);

  return <Card>{card.text}</Card>;
};
export default TaskCard;
