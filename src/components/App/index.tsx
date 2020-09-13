import React, { useState } from 'react';

import styles from './styles.module.css';
import UsersList from '../UsersList';
import SearchInput from '../SearchInput';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.container}>
      <header>
        <h1>Users List</h1>
      </header>
      <main className={styles.mainContent}>
        <SearchInput className={styles.input} onValueChange={setSearchValue} />
        <UsersList filter={searchValue} />
      </main>
    </div>
  );
}

export default App;
