export const SET_SEARCH_VIDEOS = 'set_search_videos';
export const SET_CURRENT_VIDEO = 'set_current_video';
export const SET_FETCHING_VIDEOS = 'set_fetching_videos';

export const setFetchingSearch = () => {
    return {
        type: SET_FETCHING_VIDEOS
    };
};

export const setSearchVideos = (videos, success) => {
    return {
        type: SET_SEARCH_VIDEOS,
        videos,
        success
    };
};

export const setCurrentVideo = video => {
    return {
        type: SET_CURRENT_VIDEO,
        video
    };
};

const mockVideos = term => {
    const arr = [];
    for(let x = 15; x--;){
        arr.push({
            id: x,
            thumbnail: 'http://placehold.it/240x138',
            title: `${term} video ${x}`
        });
    }

    return arr;
};

export const fetchSearchVideos = term => {
    return (dispatch) => {
        dispatch(setFetchingSearch());
        setTimeout(() => dispatch(setSearchVideos(mockVideos(term), true)), 400);
    };
};
