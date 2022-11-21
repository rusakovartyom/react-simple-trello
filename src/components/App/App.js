import Header from '../Header';
import Board from '../Board';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header>
        Trello Clone <br />
        (made with React and Redux)
      </Header>
      <Board />
    </div>
  );
};

export default App;
