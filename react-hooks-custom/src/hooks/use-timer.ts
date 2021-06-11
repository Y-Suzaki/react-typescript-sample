import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getPrimes } from 'utils/math-tool';

// 状態、振る舞い、ライフサイクルをHooksで管理する。
// 画面表示に関わるようなコードはここにはない。
const useTimer = (limit: number): [number, boolean, () => void] => {
  const [timeCount, setTimeCount] = useState(limit);
  const primes = useMemo(() => getPrimes(limit), [limit]);
  const timerId = useRef<NodeJS.Timeout>();
  const tick = () => setTimeCount((t) => t - 1);

  const clearTimer = () => {
    if (timerId.current) clearInterval(timerId.current);
  };

  const reset = useCallback(() => {
    clearTimer();
    timerId.current = setInterval(tick, 1000);
    setTimeCount(limit);
  }, [limit]);

  useEffect(() => {
    reset();

    return clearTimer;
  }, [reset]);

  useEffect(() => {
    if (timeCount === 0) reset();
  }, [timeCount, reset]);

  return [timeCount, primes.includes(timeCount), reset];
};

export default useTimer;