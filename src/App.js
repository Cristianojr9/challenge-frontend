import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <>  
      <ToastContainer />
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
