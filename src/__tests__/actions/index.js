import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../../actions';

const mockStore = configureMockStore([thunk]);

const youtubeApiSearchExample = {
    items: [{
        id: {
            kind: 'youtube#video',
            videoId: 'Ukg_U3CnJWI'
        },
        snippet: {
            title: 'Learn JavaScript in 12 Minutes',
            thumbnails: {}
        }
    }, {
        id: {
            kind: 'youtube#video',
            videoId: 'fju9ii8YsGs'
        },
        snippet: {
            title: 'JavaScript Tutorial',
            thumbnails: {}
        }
    }]
};

describe('actions', () => {
    test('should create an action to set the youtube key', () => {
        const key = 'random-key';
        const expectedAction = {
            type: actions.SET_YOUTUBE_API_KEY,
            key
        };
        expect(actions.setYoutubeApiKey(key)).toEqual(expectedAction);
    });

    test('should create an action about the start of the fetching of videos', () => {
        const expectedAction = {
            type: actions.SET_FETCHING_VIDEOS
        };
        expect(actions.setFetchingSearch()).toEqual(expectedAction);
    });

    test('should create an action to set the video search results', () => {
        const videos = youtubeApiSearchExample.items;
        const success = true;
        const expectedAction = {
            type: actions.SET_SEARCH_VIDEOS,
            videos,
            success
        };
        expect(actions.setSearchVideos(videos, success)).toEqual(expectedAction);
    });

    test('should create an action to set the current video', () => {
        const video = youtubeApiSearchExample.items[0];
        const expectedAction = {
            type: actions.SET_CURRENT_VIDEO,
            video
        };
        expect(actions.setCurrentVideo(video)).toEqual(expectedAction);
    });

    test('should create an action about the load of the youtiube iframe api', () => {
        const expectedAction = {
            type: actions.ENABLE_YOUTUBE_IFRAME_API
        };
        expect(actions.enableYoutubeIframeAPI()).toEqual(expectedAction);
    });
});

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    test('creates SET_SEARCH_VIDEOS when finishes video search', () => {
        nock('https://www.googleapis.com/')
            .get(/youtube\/v3\/search\?.+/)
            .reply(200, youtubeApiSearchExample);

        const expectedActions = [
            { type: actions.SET_FETCHING_VIDEOS },
            { type: actions.SET_SEARCH_VIDEOS, videos: youtubeApiSearchExample.items, success: true }
        ];
        const store = mockStore({ youtubeApiKey: 'random-key', searchVideos: [] });

        return store.dispatch(actions.fetchSearchVideos('javascript')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('creates ENABLE_YOUTUBE_IFRAME_API when finishes loading the youtube iframe api', () => {
        const expectedActions = [
            { type: actions.ENABLE_YOUTUBE_IFRAME_API }
        ];
        const store = mockStore({ youtubeIframeAPIStatus: false });

        return store.dispatch(actions.loadYoutubeIframeAPI(window)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
