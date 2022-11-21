import styles from './EditButtons.module.css';

const EditButtons = (props) => {
  return (
    <div className={styles.editButtons}>
      <div
        className={`${styles.editButton} ${styles.editButtonSave}`}
        onClick={props.handleSave}
      >
        {props.saveLabel}
      </div>
      {props.handleDelete && (
        <div
          className={`${styles.editButton} ${styles.editButtonDelete}`}
          onClick={props.handleDelete}
        >
          Delete
        </div>
      )}
      <div className={styles.editButtonCancel} onClick={props.handleCancel}>
        <ion-icon name="close" />
      </div>
    </div>
  );
};
export default EditButtons;
