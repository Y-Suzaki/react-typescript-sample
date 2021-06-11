import { VFC } from 'react';
import useTimer from 'hooks/use-timer';
import Timer from 'components/Timer';

const CountDownTimer: VFC<{ limit: number }> = ({ limit }) => {
  // 状態や振る舞いを取得。
  const [timeCount, isPrime, reset] = useTimer(limit);

  // ComponentにPropsとして、状態や振る舞いを与える。
  return <Timer timeCount={timeCount} isPrime={isPrime} reset={reset} />;
};

export default CountDownTimer;