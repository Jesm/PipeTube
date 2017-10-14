import youtubeIframeAPIStatus from '../../reducers/youtubeIframeAPIStatus';
import { ENABLE_YOUTUBE_IFRAME_API } from '../../actions';

describe('youtubeIframeAPIStatus reducer', () => {
    test('should return the initial state', () => {
        expect(youtubeIframeAPIStatus(undefined, {})).toBe(false);
    });

    test('should handle ENABLE_YOUTUBE_IFRAME_API', () => {
        expect(youtubeIframeAPIStatus(undefined, { type: ENABLE_YOUTUBE_IFRAME_API })).toBe(true);
    });
});
