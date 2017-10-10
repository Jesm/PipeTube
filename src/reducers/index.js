import { combineReducers } from 'redux';
import searchVideos from './searchVideos';
import currentVideo from './currentVideo';
import fetchingVideos from './fetchingVideos';

const pipeTube = combineReducers({
    searchVideos,
    currentVideo,
    fetchingVideos
});

export default pipeTube;
