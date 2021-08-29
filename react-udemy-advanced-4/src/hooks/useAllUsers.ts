/* eslint-disable react-hooks/exhaustive-deps */
import { useMessage } from './useMessage';
import { useCallback, useState } from 'react';
import { UserResult } from '../types/api/userResult';
import axios from 'axios';

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<UserResult>>([]);

  const getAllUsers = useCallback(() => {
    setLoading(true);

    axios
      .get<Array<UserResult>>('https://jsonplaceholder.typicode.com/users/')
      .then((res) => {
        if (res.data) {
          setUsers(res.data);
        } else {
          showMessage({ title: "Can't get user list because of unexpected error.", status: 'error' });
        }
      })
      .catch(() => {
        showMessage({ title: "Can't get user list because of unexpected error.", status: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { loading, getAllUsers, users };
};
