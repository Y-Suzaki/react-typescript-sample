import { VFC, useEffect, useState } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import './App.css';

const AppHooksLifeCycle: VFC = () => {
  const initTime = 0;
  const [timeLeft, setTimeLeft] = useState(initTime);
  const reset = (): void => setTimeLeft(initTime);
  const tick = (): void => setTimeLeft((time) => time + 1);

  useEffect(() => {
    // 第一引数は、任意のタイミングで実行される関数。状態変更を行うようなメインの処理。
    const timerId = setInterval(tick, 1000);

    // returnで返した関数は、unmount時に呼ばれる。不要であれば未指定で良い。
    return () => clearInterval(timerId);
    //  第二引数は、状態変化のトリガーとなる変数wを指定する。[]を指定するとComponentのレンダリングの初回時だけ呼ばれる。
  }, []);

  // 再レンダリングが発生したら毎回呼ばれる。
  useEffect(() => {
    if (timeLeft === 20) setTimeLeft(initTime);
  }, [timeLeft]);

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
        <Statistic.Value>{timeLeft}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <Button color="red" fluid onClick={reset}>
          <Icon name="redo" />
          Reset
        </Button>
      </Card.Content>
    </Card>
  );
};

export default AppHooksLifeCycle;
