import React, { useMemo } from 'react';

import UserItem from '../UserItem';
import Text from '../Text';
import { UserData } from '../App/useUserData';
import { User } from '../../types';
import styles from './styles.module.css';

type Props = {
  users: UserData;
  filter?: string;
};

const UsersList = ({ filter = '', users }: Props) => {
  const usersFiltered = useMemo(() => {
    return Array.isArray(users)
      ? users.filter(({ name }) => name.toLowerCase().includes(filter.trim().toLowerCase()))
      : [];
  }, [users, filter]);

  if (usersFiltered?.length === 0) {
    return <Text className={styles.center}>There are no users :(</Text>;
  }

  return (
    <ul className={styles.list}>
      {usersFiltered?.map(({ id, name, username }: User, index: number) => (
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
