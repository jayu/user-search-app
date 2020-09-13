import React, { useState } from 'react';

import styles from './styles.module.css';
import UsersList from '../UsersList';
import SearchInput from '../SearchInput';
import useUserData from '../App/useUserData';
import Text from '../Text';

function App() {
  const [users, error] = useUserData();
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.container}>
      <header>
        <h1>Users List</h1>
      </header>
      <main className={styles.mainContent}>
        <SearchInput className={styles.input} onValueChange={setSearchValue} placeholder="Search user by name..." />
        {error ? <Text>Users fetch error...</Text> : <UsersList users={users} filter={searchValue} />}
      </main>
    </div>
  );
}

export default App;
