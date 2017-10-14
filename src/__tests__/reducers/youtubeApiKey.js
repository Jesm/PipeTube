import youtubeApiKey from '../../reducers/youtubeApiKey';
import { SET_YOUTUBE_API_KEY } from '../../actions';

describe('youtubeApiKey reducer', () => {
    test('should return the initial state', () => {
        expect(youtubeApiKey(undefined, {})).toBeNull();
    });

    test('should handle SET_YOUTUBE_API_KEY', () => {
        expect(youtubeApiKey(undefined, { type: SET_YOUTUBE_API_KEY, key: 'foobar' })).toEqual('foobar');
    });
});
