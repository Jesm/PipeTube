import { SET_CURRENT_VIDEO } from '../actions';

const currentVideo = (state = null, action) => {
    switch(action.type){
    case SET_CURRENT_VIDEO:
        return action.video;
    default:
        return state;
    }
}

export default currentVideo;
