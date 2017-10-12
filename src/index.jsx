import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import pipeTube from './reducers';
import { setYoutubeApiKey, loadYoutubeIframeAPI } from './actions';
import App from './components/App.jsx';

export const init = (key, root, window) => {
    const store = createStore(pipeTube, applyMiddleware(thunkMiddleware));
    store.dispatch(setYoutubeApiKey(key));
    store.dispatch(loadYoutubeIframeAPI(window));

    render(
        <Provider store={store}>
            <App />
        </Provider>,
        root
    );
};

