import { SET_YOUTUBE_API_KEY } from '../actions';

const youtubeApiKey = (state = null, action) => {
    switch(action.type){
    case SET_YOUTUBE_API_KEY:
        return action.key;
    default:
        return state;
    }
}

export default youtubeApiKey;
