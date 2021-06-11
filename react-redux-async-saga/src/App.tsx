import { VFC } from 'react';
import LicenseList from './components/pages/Licenses';
import EnhancedLicenseList from './containers/pages/Licenses';
import './App.css';

// Appに直接Containerを結びづけるか、それともComponent/Pagesと結び付けるか。
const App: VFC = () => (
  <div className="container">
    <header>
      <h1>ライセンスリスト</h1>
    </header>
    <EnhancedLicenseList />
    <LicenseList licenses={[]} isLoading />
  </div>
);

export default App;
