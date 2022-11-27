import styles from './Card.module.css';

const Card = ({ provided, innerRef, children, onClick }) => {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={innerRef}
      className={styles.card}
    >
      <span>{children}</span>
      <div className={styles.cardIcons}>
        <button className={styles.cardIcon} onClick={onClick} title="Edit">
          <ion-icon name="pencil-sharp" />
        </button>
      </div>
    </div>
  );
};
export default Card;
