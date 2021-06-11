import { VFC } from 'react';
import './Timer.css';
import { Card, Icon, Item } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import { useParams, useRouteMatch } from 'react-router';
import { consoleLog } from '../utils/math-tool';

export type User = {
  id: number;
  name: string;
};

type Props = {
  title: string;
  users: User[];
};

type Params = {
  userId: string;
};

const Users: VFC<Props> = ({ title, users }) => {
  // パスパラメータで入ってきた変数を取得する。
  const { userId }: Params = useParams();
  // URLなどのパス全体の情報が必要であればMatchを使う。
  // [
  //     {
  //         "path": "/users/:userId",
  //         "url": "/users/:USER0001",
  //         "isExact": true,
  //         "params": {
  //             "userId": ":USER0001"
  //         }
  //     }
  // ]
  const match = useRouteMatch();
  consoleLog(match);

  return (
    <>
      <Helmet>
        <title>Users Page</title>
      </Helmet>
      <Card>
        <Card.Header>
          {title} - {userId}
        </Card.Header>
        <Card.Content>
          <Item.Group>
            {users.map((user) => (
              <Item key={user.id}>
                <Icon name="user circle" size="huge" />
                <Item.Content>
                  <Item.Meta>{user.name}</Item.Meta>
                </Item.Content>
              </Item>
            ))}
          </Item.Group>
        </Card.Content>
      </Card>
    </>
  );
};

export default Users;
