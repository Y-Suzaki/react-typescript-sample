import { VFC } from 'react';
import Users, { User } from '../components/Users';

const UserList: User[] = [
  {
    id: 1,
    name: 'tanaka',
  },
  {
    id: 2,
    name: 'Sato',
  },
  {
    id: 3,
    name: 'Hayashi',
  },
];

const UsersContainer: VFC = () => (
  <Users title="ユーザー一覧" users={UserList} />
);

export default UsersContainer;
