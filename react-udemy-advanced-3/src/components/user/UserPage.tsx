import styled from 'styled-components';
import { UserCard } from './UserCard';
import { useUsers } from '../../hooks/useUsers';

export const UserPage = () => {
  const { getUsers, userProfile, isLoading, isError } = useUsers();
  const onClick = () => {
    getUsers();
  };

  return (
    <div>
      <header>UserPage</header>
      <SButton onClick={onClick}>データ取得</SButton>
      {isError ? (
        <SErrorMessage>Error !</SErrorMessage>
      ) : isLoading ? (
        <p>Loading ...</p>
      ) : (
        userProfile.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
};

const SButton = styled.button`
  border-radius: 8px;
  padding: 8px 16px;
`;

const SErrorMessage = styled.p`
  color: red;
`;
