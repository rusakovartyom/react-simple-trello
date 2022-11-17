import EditButtons from './EditButtons';

import styles from './AddList.module.css';

const AddList = () => {
  return (
    <div className={styles.AddList}>
      <div>List Editor</div>
      <EditButtons />
    </div>
  );
};
export default AddList;
