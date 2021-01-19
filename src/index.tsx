import 'antd/dist/antd.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import App from './App';


declare const COMMIT_HASH: string; // Webpack magic

ReactDOM.render(
  <React.StrictMode>
    <App commitHash={COMMIT_HASH} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
