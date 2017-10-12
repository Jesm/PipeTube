import { combineReducers } from 'redux';
import youtubeApiKey from './youtubeApiKey';
import searchVideos from './searchVideos';
import currentVideo from './currentVideo';
import fetchingVideos from './fetchingVideos';
import youtubeIframeAPIStatus from './youtubeIframeAPIStatus';

const pipeTube = combineReducers({
    youtubeApiKey,
    searchVideos,
    currentVideo,
    fetchingVideos,
    youtubeIframeAPIStatus
});

export default pipeTube;
