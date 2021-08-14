import React from 'react';
import { VFC } from 'react';
import { TodoType } from '../../types/todo/todo';

// 一部の型定義のみ使う
// type TodoProps = Pick<TodoType, 'userId' | 'title' | 'completed'>;

// 一部の型定義のみ除外して使う（この例では、idのみ除外した方が記述がシンプル）
type TodoPropsOmit = Omit<TodoType, 'id'>;

// Propsでの型定義
export const Todo: VFC<TodoPropsOmit> = (props) => {
  const { title, userId, completed } = props;
  const completeMark = completed ? '完了' : '未';

  return (
    <div>
      <p>{`[${completeMark}]${title}-User:${userId}`}</p>
    </div>
  );
};
