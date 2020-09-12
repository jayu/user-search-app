import React from 'react';
import styles from './styles.module.css';

import UserItem from '../UserItem';

function App() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Users List</h1>
      </header>
      <main>
        <UserItem name="Jakub" username="jayu" />
      </main>
    </div>
  );
}

export default App;
