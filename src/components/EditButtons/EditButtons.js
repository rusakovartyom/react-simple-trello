import styles from './styles.module.css';

const EditButtons = ({ saveLabel, handleSave, handleDelete, handleCancel }) => {
  return (
    <div className={styles.editButtons}>
      <button
        className={`${styles.editButton} ${styles.editButtonSave}`}
        onClick={handleSave}
      >
        <span>{saveLabel}</span>
      </button>
      {handleDelete && (
        <button
          className={`${styles.editButton} ${styles.editButtonDelete}`}
          onClick={handleDelete}
        >
          <span>Delete</span>
        </button>
      )}
      <button className={styles.editButtonCancel} onClick={handleCancel}>
        <ion-icon name="close" />
      </button>
    </div>
  );
};
export default EditButtons;
