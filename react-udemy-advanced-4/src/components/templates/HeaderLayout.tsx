import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

// ReactのComponentをタグ指定する際に、ReactNodeで型定義できる
type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
