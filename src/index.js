import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Parents } from './components/Parents';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Parents />, document.getElementById('root'));
registerServiceWorker();
