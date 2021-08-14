import React from 'react';
import styled from 'styled-components';
import './App.css';
import { TodoPage } from './components/todo/TodoPage';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { UserPage } from './components/user/UserPage';

// axiosの戻り値を型定義
function App() {
  return (
    <BrowserRouter>
      <SContainer>
        <Link to="/todo">To Todo</Link>
        <br />
        <Link to="/user">To User</Link>

        <Switch>
          <Route path="/user" component={UserPage} />
          <Route path="/" component={TodoPage} />
        </Switch>
      </SContainer>
    </BrowserRouter>
  );
}

const SContainer = styled.div`
  padding: 24px;
`;

export default App;
