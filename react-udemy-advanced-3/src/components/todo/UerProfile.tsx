import { VFC } from 'react';
import { User } from '../../types/todo/user';

type Props = {
  user: User;
};

export const UerProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>やりたいこと</dt>
      {/* ?を付与すると、undefinedではない場合に、処理が継続（join）される。   */}
      <dd>{user.hobbies?.join(' / ')}</dd>
    </dl>
  );
};
