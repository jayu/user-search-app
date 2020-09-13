import React from 'react';

import UserItem from '../UserItem';
import Text from '../Text';
import useUserData from './useUserData';
import { User } from '../../types';
import styles from './styles.module.css';

const UsersList = () => {
  const [users, error] = useUserData();

  return (
    <ul className={styles.list}>
      {error ? <Text>Users fetch error...</Text> : null}
      {!error && users?.length === 0 ? <Text>There are no users :(</Text> : null}
      {!error &&
        users?.map(({ id, name, username }: User, index: number) => (
          <li className={styles.listItemContainer} key={id}>
            <Text color="secondary" className={styles.listCounter}>
              {index + 1}.
            </Text>
            <UserItem name={name} username={username} />
          </li>
        ))}
    </ul>
  );
};

export default UsersList;
