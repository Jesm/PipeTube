import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import pipeTube from './reducers';
import App from './components/App.jsx';

export const init = root => {
    const store = createStore(pipeTube, applyMiddleware(thunkMiddleware));

    render(
        <Provider store={store}>
            <App />
        </Provider>,
        root
    );
};

