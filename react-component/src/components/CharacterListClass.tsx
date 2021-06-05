import { Component, ReactElement } from 'react';
import { Header, Icon, Item, Button, Card, Statistic } from 'semantic-ui-react';

export type Character = {
  id: number;
  name: string;
  grade: number;
  height?: number;
};

type Props = {
  party: string;
  characters: Character[];
};

// Stateの型を定義
type State = { count: number };

// eslint-disable-next-line react/prefer-stateless-function
class CharacterList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
  }

  // アロー関数にすることで、thisが外側のオブジェクト（CharacterList）になり、Stateを参照することができる。
  // 逆にただの関数をButton OnClickに渡すと、thisがButtonオブジェクトになってしまい、Stateを参照することができない。
  incrementAllow = (): void => {
    console.log(this);
    this.setState((state) => ({ count: state.count + 10 }));
  };

  resetAllow = (): void => {
    this.setState(() => ({ count: 0 }));
  };

  reset(): void {
    this.setState(() => ({ count: 0 }));
  }

  increment(): void {
    console.log(this);
    this.setState((state) => ({ count: state.count + 10 }));
  }

  render(): ReactElement {
    const { party, characters } = this.props;
    const { count } = this.state;

    return (
      <>
        <Header as="h2">{party}</Header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>EX</Statistic.Label>
            <Statistic.Value>{count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              <Button color="red" onClick={this.resetAllow}>
                reset
              </Button>
              <Button color="blue" onClick={this.incrementAllow}>
                スライムを倒した。
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Item.Group>
          {characters.map((character) => (
            <Item key={character.id}>
              <Icon name="user circle" size="huge" />
              <Item.Content>
                <Item.Header>{character.name}</Item.Header>
                <Item.Meta>{character.grade}レベル</Item.Meta>
                <Item.Meta>
                  {/* nullish coalescing. A ?? B Aがnullまたはundefine以外ならAを、そうでないならBを返す。 */}
                  {character.height ?? '???'}
                  cm
                </Item.Meta>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </>
    );
  }
}

export default CharacterList;
