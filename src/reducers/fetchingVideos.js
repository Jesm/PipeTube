import { SET_FETCHING_VIDEOS, SET_SEARCH_VIDEOS } from '../actions';

const fetchingVideos = (state = false, action) => {
    switch(action.type){
    case SET_FETCHING_VIDEOS:
        return true;
    case SET_SEARCH_VIDEOS:
        return false;
    default:
        return state;
    }
}

export default fetchingVideos;
