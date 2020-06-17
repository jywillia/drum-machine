// import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// import css style sheet
import './index.css';

// import app wrapper
import DMApp from './DMApp';

// default service worker
// import * as serviceWorker from './serviceWorker';

// import redux dependencies
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import reducer functions
import dmReducer from './redux/reducers/dmReducer.js';

// create store to hold app's state
const store = createStore( dmReducer );

// render app wrapper with store connects redux
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <DMApp />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();