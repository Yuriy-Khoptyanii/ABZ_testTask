import './App.scss';

import Header from './components/header/Header';
import Poster from './components/poster/Poster';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Poster />
      </div>
    </div>
  );
}

export default App;
