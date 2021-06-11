import { VFC } from 'react';
import './Timer.css';
import { Card } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';

type Props = {
  title: string;
};

const Home: VFC<Props> = ({ title }) => (
  <>
    {/* ページのタイトルを変更したい場合はHelmetを使う。 */}
    <Helmet>
      <title>Top Page</title>
    </Helmet>
    <Card>
      <Card.Content>{title}</Card.Content>
    </Card>
  </>
);

export default Home;
