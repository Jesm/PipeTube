import currentVideo from '../../reducers/currentVideo';
import { SET_CURRENT_VIDEO } from '../../actions';

describe('currentVideo reducer', () => {
    test('should return the initial state', () => {
        expect(currentVideo(undefined, {})).toBeNull();
    });

    test('should handle SET_CURRENT_VIDEO', () => {
        const action = {
            type: SET_CURRENT_VIDEO,
            video: {
                id: { videoId: 'foobar' },
                snippet: { title: 'FooBar' }
            }
        };
        expect(currentVideo(undefined, action)).toEqual(action.video);
    });
});
