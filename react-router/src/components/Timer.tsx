import { VFC } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import './Timer.css';

type Props = {
  timeCount?: number;
  isPrime?: boolean;
  reset?: () => void;
};

const Timer: VFC<Props> = ({
                             timeCount = 0,
                             isPrime = false,
                             reset = () => undefined}) => (
  <Card>
    <Statistic className="number-board">
      <Statistic.Label>Left time count</Statistic.Label>
      <Statistic.Value className={isPrime ? 'prime-number' : undefined}>
        {timeCount}
      </Statistic.Value>
    </Statistic>
    <Card.Content>
      <Button color="red" fluid onClick={reset}>
        <Icon name="redo" />
        Reset
      </Button>
    </Card.Content>
  </Card>
);

export default Timer;