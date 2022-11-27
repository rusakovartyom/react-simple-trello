import styles from './EditButtons.module.css';

const EditButtons = (props) => {
  return (
    <div className={styles.editButtons}>
      <button
        className={`${styles.editButton} ${styles.editButtonSave}`}
        onClick={props.handleSave}
      >
        <span>{props.saveLabel}</span>
      </button>
      {props.handleDelete && (
        <button
          className={`${styles.editButton} ${styles.editButtonDelete}`}
          onClick={props.handleDelete}
        >
          <span>Delete</span>
        </button>
      )}
      <button className={styles.editButtonCancel} onClick={props.handleCancel}>
        <ion-icon name="close" />
      </button>
    </div>
  );
};
export default EditButtons;
