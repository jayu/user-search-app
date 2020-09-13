import React from 'react';

import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  className?: string;
};

const Text = ({ color = 'primary', children, className = '' }: Props) => {
  return <span className={`${styles[color]} ${className}`}>{children}</span>;
};

export default Text;
