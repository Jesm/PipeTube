import { SET_SEARCH_VIDEOS } from '../actions';

const searchVideos = (state = { videos: [], success: true }, action) => {
    switch(action.type){
    case SET_SEARCH_VIDEOS:
        return {
            videos: action.videos,
            success: action.success
        };
    default:
        return state;
    }
}

export default searchVideos;
