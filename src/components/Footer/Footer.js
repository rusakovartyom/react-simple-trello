import styles from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; {new Date().getFullYear()} Rusakov Artyom. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
