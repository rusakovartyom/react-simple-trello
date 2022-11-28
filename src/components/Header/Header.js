import styles from './styles.module.css';

const Header = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};
export default Header;
