import { useCallback, useState } from 'react';
import { UserResult } from '../types/api/userResult';

export const useSelectUser = () => {
  // 起動時の未選択状態はnullの可能性がある。
  const [selectedUser, setSelectedUser] = useState<UserResult | null>(null);
  const selectUser = useCallback((id: number, users: Array<UserResult>, onOpen: () => void) => {
    const user = users.find((user) => user.id === id);
    // 左辺がnullまたはundefinedならnullを返す
    // setSelectedUser(user ?? null);
    // 存在することが保証されているのであれば、!でundefinedを無効化しても良い。
    setSelectedUser(user!);
    onOpen();
  }, []);
  return { selectedUser, selectUser };
};
