import React, { FC, Component, ReactElement } from 'react';

type InjectedProps = {
  count: number;
  reset: () => void;
  increment: () => void;
};
type Props = { max: number };
type State = { count: number };

const withCounter = (WrappedComponent: FC<Props & Partial<InjectedProps>>) =>
  class EnhancedComponent extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = { count: 0 };
    }

    reset = (): void => this.setState({ count: 0 });
    increment = (): void => {
      this.setState((state) => ({ count: state.count + 1 }));
    };

    componentDidUpdate = (): void => {
      const { max }: Props = this.props;
      const { count }: State = this.state;
      if (count > max) this.reset();
    };

    render = (): ReactElement => {
      const { max }: Props = this.props;
      const { count }: State = this.state;

      return (
        <WrappedComponent
          max={max}
          count={count}
          reset={this.reset}
          increment={this.increment}
        />
      );
    };
  };

const CounterComponent: FC<Props & Partial<InjectedProps>> = ({
  max,
  count = 0,
  reset = () => undefined,
  increment = () => undefined,
}) => (
  <div>
    <div>
      {' '}
      {count} / {max}
    </div>
    <button onClick={reset} type="button">
      {' '}
      Reset{' '}
    </button>
    <button onClick={increment} type="button">
      {' '}
      + 1{' '}
    </button>
  </div>
);

export default withCounter(CounterComponent);
