import React, { useState, useCallback } from 'react';
import styles from './styles.module.css';

type Props = {
  onValueChange?: (text: string) => void;
  className?: string;
};

const SearchInput = ({ onValueChange, className = '' }: Props) => {
  const [value, setValue] = useState('');
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setValue(value);
      if (onValueChange) {
        onValueChange(value);
      }
    },
    [setValue],
  );
  return (
    <input
      className={`${styles.input} ${className}`}
      value={value}
      onChange={handleInputChange}
      placeholder="Search user by name..."
    ></input>
  );
};

export default SearchInput;
