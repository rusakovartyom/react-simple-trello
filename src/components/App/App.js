import Header from 'components/Header';
import Board from 'components/Board';
import Footer from 'components/Footer';

import styles from './styles.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.top}>
        <Header>
          <h1 className={styles.heading}>Trello Clone</h1>
          <h2 className={styles.heading}>(made with React and Redux)</h2>
        </Header>
        <Board />
      </div>
      <Footer />
    </div>
  );
};

export default App;
