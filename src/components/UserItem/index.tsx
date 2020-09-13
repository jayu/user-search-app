import React from 'react';
import styles from './styles.module.css';

import Text from '../Text';

type Props = {
  name: string;
  username: string;
};

const UserItem = ({ name, username }: Props) => {
  return (
    <span className={styles.userContainer}>
      <Text>{name}</Text>
      <Text color="secondary" className={styles.userName}>
        @{username}
      </Text>
    </span>
  );
};

export default UserItem;
