import React from 'react';
import ReactDOM from 'react-dom';
import MainContextApi from './context-api/MainContextApi';
import MainUseContext from './user-context/MainUseContext';
import Main from './normal-transfer-data/Main';


ReactDOM.render(
  <React.StrictMode>
    <Main />
    <MainContextApi />
    <MainUseContext />
  </React.StrictMode>,
  document.getElementById('root')
);
