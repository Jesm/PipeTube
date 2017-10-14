import fetchingVideos from '../../reducers/fetchingVideos';
import { SET_FETCHING_VIDEOS, SET_SEARCH_VIDEOS } from '../../actions';

describe('fetchingVideos reducer', () => {
    test('should return the initial state', () => {
        expect(fetchingVideos(undefined, {})).toBe(false);
    });

    test('should handle SET_FETCHING_VIDEOS', () => {
        expect(fetchingVideos(undefined, { type: SET_FETCHING_VIDEOS })).toBe(true);
    });

    test('should handle SET_SEARCH_VIDEOS', () => {
        expect(fetchingVideos(true, { type: SET_SEARCH_VIDEOS, videos: [] })).toBe(false);
    });
});
