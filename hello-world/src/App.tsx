// tsconfig.jsonが"jsx": "react-jsx"に設定されていれば、以下のimport文は自動挿入されるため省略可能。
// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { FunctionComponent } from 'react';
import Greets from './components/Greets';

const App: FunctionComponent = () => {
  const message = 'Hello World. React.';
  const getMessage = (): string => 'Return Hello World. Function.';
  const isLoading = true;
  const name = 'Tanaka';
  const menus: string[] = ['Top', 'UserList', 'ShopList'];

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* 変数の埋め込み */}
          {message}
        </p>
        <p>
          {/* 関数の埋め込み */}
          {getMessage()}
        </p>
        {/* 自作コンポーネントの埋め込み */}
        <Greets name="React Component" times={3}>
          ここがChildrenになるよ。
        </Greets>
        <p>
          {/* trueとfalseは出力を無視される仕様のため、それを利用して条件による出し分けを表現する
              $$や|のショートサーキット評価を使う。 */}
          {isLoading && 'Loading....'}
          {name ? 'Welcome to see you.' : 'Guest san Welcome.'}
        </p>
        <p>
          {/* 繰り返し処理は、値を返す式である関数型を利用する。制御構文であるforやifは試用できない。 */}
          <ul>
            {menus.map((menu) => ( // 値を返すので()で囲む。1行で書くなら不要。もしくはreturnする。
              <li>
                {menu}
              </li>
            ))}
          </ul>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
