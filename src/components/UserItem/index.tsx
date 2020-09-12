import React from 'react';
import styles from './styles.module.css';

type Props = {
  name: string;
  username: string;
};

const UserItem = ({ name, username }: Props) => {
  return (
    <p className={styles.userContainer}>
      <span>{name}</span>
      <span className={styles.userName}>@{username}</span>
    </p>
  );
};

export default UserItem;
