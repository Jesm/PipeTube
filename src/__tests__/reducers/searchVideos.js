import searchVideos from '../../reducers/searchVideos';
import { SET_SEARCH_VIDEOS } from '../../actions';

describe('searchVideos reducer', () => {
    test('should return the initial state', () => {
        expect(searchVideos(undefined, {})).toEqual({
            videos: [],
            success: true
        });
    });

    test('should handle SET_SEARCH_VIDEOS', () => {
        const action = {
            type: SET_SEARCH_VIDEOS,
            videos: [{
                id: { videoId: 'foobar' },
                snippet: { title: 'FooBar' }
            }],
            success: true
        };
        expect(searchVideos(undefined, action)).toEqual({
            videos: [{
                id: { videoId: 'foobar' },
                snippet: { title: 'FooBar' }
            }],
            success: true
        });
    });
});
