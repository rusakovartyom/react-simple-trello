import styles from './Header.module.css';

const Header = (props) => {
  return <header className={styles.Header}>{props.children}</header>;
};
export default Header;
