/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useEffect, VFC } from 'react';
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';
import { UserCard } from '../organisms/usesr/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserDetailModal } from '../organisms/usesr/UserDetailModal';
import { useSelectUser } from '../../hooks/useSelectUser';
import { useLoginUser } from '../../hooks/useLoginUser';

export const UserManagement: VFC = memo(() => {
  const { loading, getAllUsers, users } = useAllUsers();
  const { selectedUser, selectUser } = useSelectUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  const onClickUser = useCallback(
    (id: number) => {
      selectUser(id, users, onOpen);
    },
    [users],
  );

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} spacing="30px">
          {users.map((user) => (
            <WrapItem key={user.username} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClickUser={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} isAdmin={loginUser?.isAdmin} user={selectedUser} />
    </>
  );
});
