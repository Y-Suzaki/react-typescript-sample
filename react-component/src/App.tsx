import { VFC } from 'react';
import CharacterList, { Character } from './components/CharacterList';
import './App.css';

// FCのchildrenを取らない型定義がVFC。
const App: VFC = () => {
  const characters: Character[] = [
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

  return (
    <div className="container">
      <header>
        <h1>『ダイの大冒険』登場人物</h1>
      </header>
      <CharacterList party="勇者御一行様" characters={characters} />
    </div>
  );
};

export default App;
