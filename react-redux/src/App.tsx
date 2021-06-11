import { VFC } from 'react';

import ColorfulBeads from 'containers/molecules/ColorfulBeads';
import EnhancedCounterBoardToolkit from 'containers/organisms/CounterBoardToolkit';

import './App.css';

// Appに直接Containerを結びづけるか、それともComponent/Pagesと結び付けるか。
const App: VFC = () => (
  <div className="container">
    <header>
      <h1>ビーズカウンター</h1>
    </header>
    <EnhancedCounterBoardToolkit />
    <ColorfulBeads />
  </div>
);

export default App;
