import { useState, useEffect, useCallback } from 'react';

import { User } from '../../types';

export type UserData = User[] | null;

const useUserData = (): [UserData, boolean] => {
  const [users, setUsers] = useState<UserData>([]);
  const [fetchError, setFetchError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
      setUsers(data);
      setFetchError(false);
    } catch (e) {
      setUsers(null);
      setFetchError(true);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [users, fetchError];
};

export default useUserData;
