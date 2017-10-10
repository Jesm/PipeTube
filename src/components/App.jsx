import React from 'react';
import SearchVideos from '../containers/SearchVideos.js';
import CurrentVideo from '../containers/CurrentVideo.js';
import '../styles/app.css';

const App = props => (
    <main>
        <SearchVideos />
        <CurrentVideo />
    </main>
);

export default App;
