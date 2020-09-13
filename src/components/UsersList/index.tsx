import React, { useMemo } from 'react';

import UserItem from '../UserItem';
import Text from '../Text';
import useUserData from './useUserData';
import { User } from '../../types';
import styles from './styles.module.css';

type Props = {
  filter?: string;
};

const UsersList = ({ filter = '' }: Props) => {
  const [users, error] = useUserData();
  const usersFiltered = useMemo(() => {
    return Array.isArray(users)
      ? users.filter(({ name }) => name.toLowerCase().includes(filter.trim().toLowerCase()))
      : [];
  }, [users, filter]);

  if (error) {
    return <Text>Users fetch error...</Text>;
  }

  if (!error && usersFiltered?.length === 0) {
    return <Text className={styles.center}>There are no users :(</Text>;
  }

  return (
    <ul className={styles.list}>
      {!error &&
        usersFiltered?.map(({ id, name, username }: User, index: number) => (
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
