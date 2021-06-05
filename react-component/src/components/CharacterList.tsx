import { VFC } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

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

// これも子要素は取らないため、VFCで定義している。
// Propsの型をジェネリクスとして定義している。
// Propsが不要な場合（Appのように）、ジェネリクスの指定を省略できる。
const CharacterList: VFC<Props> = ({ party, characters }) => (
  <>
    <Header as="h2">{party}</Header>
    <Item.Group>
      {characters.map((character) => (
        <Item key={character.id}>
          <Icon name="user circle" size="huge" />
          <Item.Content>
            <Item.Header>{character.name}</Item.Header>
            <Item.Meta>{character.grade}年生</Item.Meta>
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

export default CharacterList;
