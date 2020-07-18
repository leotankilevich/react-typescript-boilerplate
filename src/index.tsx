import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(<App title="It's React + TS Project" />, document.getElementById('app'));

setTimeout(() => {
    ReactDOM.render(<App title="It's React + TS Project" />, document.getElementById('app'));
});
