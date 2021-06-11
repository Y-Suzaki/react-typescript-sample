import { VFC } from 'react';
import { useSelector } from 'react-redux';

import ColorfulBeads from 'components/molecules/ColorfulBeads';
import { CounterState } from 'ducks/counter';

// カウント情報はStateに保存されているため、Storeから取得し、Props経由でComponentに渡してあげる。
// その繋ぎ込みを行うのがContainer。
const EnhancedColorfulBeads: VFC<{ count?: number }> = () => {
  const count = useSelector<CounterState, number>((state) => state.count);

  return <ColorfulBeads count={count} />;
};

export default EnhancedColorfulBeads;
