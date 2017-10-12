import { ENABLE_YOUTUBE_IFRAME_API } from '../actions';

const youtubeIframeAPIStatus = (state = false, action) => {
    switch(action.type){
    case ENABLE_YOUTUBE_IFRAME_API:
        return true;
    default:
        return state;
    }
}

export default youtubeIframeAPIStatus;
