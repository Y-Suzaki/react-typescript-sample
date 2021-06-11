import { VFC } from 'react';
import CountDownTimer from 'containers/Timer';
import Timer from './components/Timer';
import './App.css';

const App: VFC = () => (
  <div className="container">
    <header>
      <h1>タイマー</h1>
    </header>
    {/* 状態と振る舞いをContainerでインジェクトされたComponent */}
    <CountDownTimer limit={60} />
    {/* 素のComponent。これ単体でも画面に表示することは可能。状態や振る舞いがないので、静的なComponent */}
    <Timer/>
  </div>
);

export default App;