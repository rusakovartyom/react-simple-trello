import Header from './Header';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Header>
        Trello Clone <br />
        (made with React and Redux)
      </Header>
    </div>
  );
};

export default App;
