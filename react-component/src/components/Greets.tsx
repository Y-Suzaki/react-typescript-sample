// < MyComponent foo =" bar" > baz </ MyComponent >
// ↓
// React.createElement( MyComponent, { foo: 'bar' }, 'baz');
// ↓
// { type: 'MyComponent', props: { foo: 'bar', children: 'baz' }, key: null, ref: null, }

import React from 'react';

type Props = {name: string, times?: number};

// timesで受け取った回数のnameを出力するコンポーネント
const Greets: React.FunctionComponent<Props> = (props) => {
  // childrenは暗黙のプロパティとして受け取れる。
  const { name, times = 1, children } = props;

  return (
    <>
      {[...Array<number>(times)].map((_) => (
        <p key={1}>
          Hello,
          {name}
          !
          {children}
        </p>
      ))}
    </>
  );
};

export default Greets;
