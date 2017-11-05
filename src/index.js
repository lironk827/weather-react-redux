import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// ReduxPromise is a middleware that will get the promise payload
// of an action and will postpone its delivery to the reducers until its been resolved
// and then will send the resolved value to the reducers
import ReduxPromise from 'redux-promise';

// by default if no file is declared after the directory name
// the engine will automatically search for file called "index.js"
// so no need to write './reducers/index.js'
import reducers from './reducers';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>
    , document.querySelector('.container'));
