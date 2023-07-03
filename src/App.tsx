import './App.scss';

import { useState } from 'react';

import Header from './components/header/Header';
import Poster from './components/poster/Poster';
import { UsersInfo } from './components/usersInfo/UsersInfo';

function App() {
  const [isUpdated, setIsUpdated] = useState(false);

  return (
    <div className="app">
      <Header />
      <div className="main">
        <Poster />
        <UsersInfo isUpdated={isUpdated} />
      </div>
    </div>
  );
}

export default App;
