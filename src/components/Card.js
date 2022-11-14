import { useSelector } from 'react-redux';

import styles from './Card.module.css';

const Card = (props) => {
  const card = useSelector((state) => state.cardsById[props.cardId]);

  return <div className={styles.Card}>{card.text}</div>;
};
export default Card;
