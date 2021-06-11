import { VFC } from 'react';
import './Timer.css';
import { Link, useHistory } from 'react-router-dom';

import { Button } from 'semantic-ui-react';

const Menu: VFC = () => {
  // historyオブジェクトを取得して、ページ遷移を制御できる。
  const history = useHistory();

  return (
    <>
      <Button color="google plus" onClick={() => history.goForward()}>
        Go Forward
      </Button>
      <Button color="google plus" onClick={() => history.goBack()}>
        Go Back
      </Button>
      <Button color="google plus" onClick={() => history.push('/')}>
        Go Home
      </Button>
      <ul>
        <li>
          <Link to="/">トップページへ</Link>
        </li>
        <li>
          <Link to="/users/:USER0001">ユーザー一覧へ</Link>
        </li>
        <li>
          <Link to="/timer">タイマーページへ</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
