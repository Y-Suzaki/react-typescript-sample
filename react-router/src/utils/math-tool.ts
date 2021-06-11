/* eslint-disable import/prefer-default-export */

export const getPrimes = (maxRange: number): number[] =>
  [...Array(maxRange + 1).keys()].slice(2).filter((n) => {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return false;
    }

    return true;
  });

/* eslint-disable @typescript-eslint/no-explicit-any */
export const consoleLog = (...message: any[]): void => {
  // eslint-disable-next-line no-console
  console.log(message);
};

consoleLog('Hello');
