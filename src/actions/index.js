import fetch from 'isomorphic-fetch';

export const SET_YOUTUBE_API_KEY = 'set_youtube_api_key';
export const SET_SEARCH_VIDEOS = 'set_search_videos';
export const SET_CURRENT_VIDEO = 'set_current_video';
export const SET_FETCHING_VIDEOS = 'set_fetching_videos';
export const ENABLE_YOUTUBE_IFRAME_API = 'enable_youtube_iframe_api';

export const setYoutubeApiKey = key => {
    return {
        type: SET_YOUTUBE_API_KEY,
        key
    };
};

const buildQueryString = obj => (
    Object.keys(obj)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join('&')
);

const youtubeApi = (method, params) => {
    const base = `https://www.googleapis.com/youtube/v3/${method}`;
    const queryString = buildQueryString(params);
    const url = `${base}?${queryString}`;

    return fetch(url);
};

const isVideo = item => item.id.kind == 'youtube#video';

export const fetchSearchVideos = term => {
    return (dispatch, getState) => {
        dispatch(setFetchingSearch());

        const params = {
            key: getState().youtubeApiKey,
            q: term,
            type: 'video',
            part: 'snippet',
            fields: 'items(id,snippet(title,thumbnails))',
            maxResults: 15
        };

        return youtubeApi('search', params)
            .then(response => response.json())
            .then(json => dispatch(setSearchVideos(json.items.filter(isVideo), !json.error)))
            .catch(ex => dispatch(setSearchVideos([], false)));
    };
};

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

const incorporateYoutubeIframeAPI = window => (
    new Promise(resolve => {
        window.onYouTubeIframeAPIReady = resolve;

        const element = window.document.createElement('script');
        element.src = 'https://www.youtube.com/iframe_api';
        window.document.body.appendChild(element);
    })
);

export const loadYoutubeIframeAPI = window => {
    return dispatch => {
        return incorporateYoutubeIframeAPI(window)
            .then(() => dispatch(enableYoutubeIframeAPI()));
    };
};

export const enableYoutubeIframeAPI = () => {
    return {
        type: ENABLE_YOUTUBE_IFRAME_API
    };
};
