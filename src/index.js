import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let baseURL = 'http://pokeapi.co/api/v2';

ReactDOM.render(
    <App baseURL={baseURL} />,
    document.getElementById('root')
);
registerServiceWorker();