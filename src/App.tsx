import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { Header, Poster, SignUpForm, SuccessBanner, UsersInfo } from './components';

function App() {
  const [isUpdated, setIsUpdated] = useState(false);

  return (
    <div className="app">
      <Header />
      <div className="main">
        <Poster />
        <UsersInfo isUpdated={isUpdated} />
        {isUpdated ? <SuccessBanner /> : <SignUpForm setIsUpdated={setIsUpdated} />}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
