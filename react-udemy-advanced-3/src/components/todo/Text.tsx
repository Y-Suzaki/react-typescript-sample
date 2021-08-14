import { VFC } from 'react';

type Props = {
  color: string;
  fontSize: string;
};

// FCは暗黙的にPropsにchildrenを含むため、react18以降では変更が入る。
// それまでの暫定対応として、VFCを使うのが良い。
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキスト用のコンポーネントです。</p>;
};
