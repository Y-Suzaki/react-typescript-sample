import { VFC, useState } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';
import './App.css';

const AppHooks: VFC = () => {
  // useState()で、Stateと変更用の関数を返す。useState()の引数はStateの初期値。
  const [count, setCount] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState('');
  const increment = () => setCount((c) => c + 1);
  const reset = () => setCount(0);

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" onClick={reset}>
            Reset
          </Button>
          <Button color="green" onClick={increment}>
            +1
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
export default AppHooks;
