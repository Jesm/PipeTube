import { connect } from 'react-redux';
import { setCurrentVideo } from '../actions';
import VideoLayer from '../components/VideoLayer.jsx';

const mapStateToProps = state => {
    return {
        video: state.currentVideo,
        youtubeIframeAPIStatus: state.youtubeIframeAPIStatus
    };
}

const mapDispatchToProps = dispatch => ({});

const CurrentVideo = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoLayer);

export default CurrentVideo;
