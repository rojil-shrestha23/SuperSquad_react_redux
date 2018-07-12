import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//characters == root reducers ie index.js

import rootReducer from './reducers';
import  { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

console.log('store.getState()', store.getState());


ReactDOM.render(
    <Provider store ={store}>   
        <App/>
    </Provider>,
        document.getElementById('root')
    
);