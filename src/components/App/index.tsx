import React from 'react';

import styles from './styles.module.css';
import UsersList from '../UsersList';

function App() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Users List</h1>
      </header>
      <main>
        <UsersList />
      </main>
    </div>
  );
}

export default App;
