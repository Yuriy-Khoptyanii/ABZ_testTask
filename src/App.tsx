import './App.scss';

import { ThemeProvider } from '@mui/material';
import { useState } from 'react';

import Header from './components/header/Header';
import Poster from './components/poster/Poster';
import { SignUpForm } from './components/signUpForm/SignUpForm';
import { SuccessBanner } from './components/successBanner/SuccessBanner';
import { UsersInfo } from './components/usersInfo/UsersInfo';
import { theme } from './utils/customMui';

function App() {
  const [isUpdated, setIsUpdated] = useState(false);

  console.log(isUpdated);

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Header />
        <div className="main">
          <Poster />
          <UsersInfo isUpdated={isUpdated} setIsUpdated={setIsUpdated} />
          {isUpdated ? <SuccessBanner /> : <SignUpForm setIsUpdated={setIsUpdated} />}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
