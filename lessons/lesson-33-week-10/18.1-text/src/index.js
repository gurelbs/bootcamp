import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App 
      txt='hello world'
      maxLength={5}
    />
  </React.StrictMode>,
  document.getElementById('root')
);