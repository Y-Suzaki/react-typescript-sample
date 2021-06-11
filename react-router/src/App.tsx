import { VFC } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import CountDownTimer from 'containers/Timer';
import UsersContainer from './containers/Users';
import Timer from './components/Timer';
import Home from './components/Home';
import Menu from './components/Menu';
import './App.css';

const App: VFC = () => (
  <div className="container">
    <header>
      <h1>テスト用Webページへようこそ</h1>
      <Menu />
    </header>
    <Switch>
      <Route exact path="/">
        <Home title="Update Content." />
      </Route>
      <Route exact path="/users/:userId">
        <UsersContainer />
      </Route>
      <Route exact path="/timer">
        {/* 状態と振る舞いをContainerでインジェクトされたComponent */}
        <CountDownTimer limit={60} />
        {/* 素のComponent。これ単体でも画面に表示することは可能。状態や振る舞いがないので、静的なComponent */}
        <Timer />
      </Route>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
