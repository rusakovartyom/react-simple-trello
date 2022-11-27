import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; {new Date().getFullYear()} Rusakov Artyom. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
