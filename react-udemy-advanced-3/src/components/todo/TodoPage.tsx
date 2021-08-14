import { Text } from './Text';
import { UerProfile } from './UerProfile';
import { Todo } from './Todo';
import React, { useState } from 'react';
import { User } from '../../types/todo/user';
import { TodoType } from '../../types/todo/todo';
import axios from 'axios';

export const TodoPage = () => {
  const user: User = {
    name: 'Tanaka',
    // hobbies: ['game', 'cooking', 'sleep'],
  };
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickDataFetch = () => {
    axios
      .get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTodos(response.data);
      });
  };

  return (
    <div className="App">
      <header>Hello.</header>
      <Text color={'red'} fontSize={'20px'} />
      <UerProfile user={user} />
      <button onClick={onClickDataFetch}>Fetch Data</button>
      {todos.map((x) => (
        <Todo title={x.title} userId={x.userId} completed={x.completed} />
      ))}
    </div>
  );
};
