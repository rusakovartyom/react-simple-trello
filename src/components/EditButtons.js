import styles from './EditButtons.module.css';

const EditButtons = (props) => {
  return (
    <div className={styles.EditButtons}>
      <div
        className={`${styles.EditButton} ${styles.EditButtonSave}`}
        onClick={props.handleSave}
      >
        {props.saveLabel}
      </div>
      {props.handleDelete && (
        <div
          className={`${styles.EditButton} ${styles.EditButtonDelete}`}
          onClick={props.handleDelete}
        >
          Delete
        </div>
      )}
      <div className={styles.EditButtonCancel} onClick={props.handleCancel}>
        <ion-icon name="close" />
      </div>
    </div>
  );
};
export default EditButtons;
