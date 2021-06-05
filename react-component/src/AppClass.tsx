import { Component, ReactElement } from 'react';
import CharacterList, { Character } from './components/CharacterListClass';
import './App.css';

class AppClass extends Component {
  characters: Character[] = [
    {
      id: 1,
      name: 'ダイ',
      grade: 1,
      height: 160,
    },
    {
      id: 2,
      name: 'ポップ',
      grade: 1,
      height: 172,
    },
    {
      id: 3,
      name: 'マァム',
      grade: 2,
      height: 168,
    },
    {
      id: 4,
      name: 'クロコダイン',
      grade: 3,
    },
    {
      id: 5,
      name: 'ヒュンケル',
      grade: 3,
      height: 197,
    },
    {
      id: 6,
      name: 'バラン',
      grade: 3,
      height: 184,
    },
  ];

  render(): ReactElement {
    return (
      <div className="container">
        <header>
          <h1>『ダイの大冒険』登場人物</h1>
        </header>
        <CharacterList party="勇者御一行様" characters={this.characters} />
      </div>
    );
  }
}

export default AppClass;
