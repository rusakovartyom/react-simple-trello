import styles from './ListEditor.module.css';

const ListEditor = (props) => {
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      props.saveList();
    }
  };
  return (
  );
};
export default ListEditor;
