import styles from './styles.module.css';

const Card = ({ provided, innerRef, onClick, text }) => {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={innerRef}
      className={styles.card}
    >
      <span>{text}</span>
      <div className={styles.cardIcons}>
        <button className={styles.cardIcon} onClick={onClick} title="Edit">
          <ion-icon name="pencil-sharp" />
        </button>
      </div>
    </div>
  );
};
export default Card;
