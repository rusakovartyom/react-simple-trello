import { useSelector } from 'react-redux';

import Card from './Card';

import styles from './List.module.css';

const List = (props) => {
  const list = useSelector((state) => state.listsById[props.listId]);

  return (
    <div className={styles.List}>
      <div className={styles.Title}>{list.title}</div>

      {list.cards &&
        list.cards.map((cardId, index) => (
          <Card key={cardId} cardId={cardId} index={index} listId={list._id} />
        ))}
    </div>
  );
};
export default List;
