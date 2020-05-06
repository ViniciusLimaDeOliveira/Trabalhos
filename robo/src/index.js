import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Robo from './main/Robo'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <h1>Robot</h1>
    <Robo/>
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();