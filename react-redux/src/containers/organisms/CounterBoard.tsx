import { VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add, decrement, increment, CounterState } from 'ducks/counter';
import CounterBoard from 'components/organisms/CounterBoard';

const EnhancedCounterBoard: VFC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  // アクションはdispatcher経由で投げる必要があるため、全てラップしてComponentのPropsに渡すこと。
  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default EnhancedCounterBoard;
