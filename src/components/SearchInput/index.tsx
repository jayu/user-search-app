import React, { useState, useCallback } from 'react';
import styles from './styles.module.css';

type Props = {
  placeholder?: string;
  className?: string;
  onValueChange?: (text: string) => void;
};

const SearchInput = ({ onValueChange, className = '', placeholder }: Props) => {
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
      placeholder={placeholder}
    ></input>
  );
};

export default SearchInput;
