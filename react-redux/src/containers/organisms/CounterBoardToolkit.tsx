import { VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { counterSlice, CounterStateToolkit } from 'ducks/counterToolkit';
import CounterBoard from 'components/organisms/CounterBoard';

const EnhancedCounterBoardToolkit: VFC = () => {
  const count = useSelector<CounterStateToolkit, number>(
    (state) => state.count,
  );
  const dispatch = useDispatch();
  const { added, decremented, incremented } = counterSlice.actions;

  // アクションはdispatcher経由で投げる必要があるため、全てラップしてComponentのPropsに渡すこと。
  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(added(amount))}
      decrement={() => dispatch(decremented())}
      increment={() => dispatch(incremented())}
    />
  );
};

export default EnhancedCounterBoardToolkit;
