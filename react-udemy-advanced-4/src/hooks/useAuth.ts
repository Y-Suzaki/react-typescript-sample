/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';
import axios from 'axios';
import { UserResult } from '../types/api/userResult';
import { useHistory } from 'react-router-dom';
import { useMessage } from './useMessage';
import { useLoginUser } from './useLoginUser';

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback((userId: string) => {
    setLoading(true);
    console.log(userId);

    axios
      .get<UserResult>(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        setLoading(false);
        if (res.data) {
          const isAdmin = res.data.id === 10;
          setLoginUser({ ...res.data, isAdmin });
          showMessage({ title: 'Succeed to login.', status: 'info' });
          history.push('/home');
        } else {
          showMessage({ title: "Can't find user id.", status: 'error' });
        }
      })
      .catch(() => {
        setLoading(false);
        showMessage({ title: "Can't login because of unexpected error.", status: 'error' });
      })
      .finally(() => {
        // setLoading(false);
      });
  }, []);
  return { login, loading };
};
