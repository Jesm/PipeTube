import { connect } from 'react-redux';
import { fetchSearchVideos, setCurrentVideo } from '../actions';
import SearchLayer from '../components/SearchLayer.jsx';

const mapStateToProps = state => {
    return {
        videos: state.searchVideos.videos,
        currentVideo: state.currentVideo,
        fetchingVideos: state.fetchingVideos
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onTermSearch: term => {
            dispatch(fetchSearchVideos(term));
        },
        onVideoClick: video => {
            dispatch(setCurrentVideo(video));
        }
    };
};

const SearchVideos = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchLayer);

export default SearchVideos;
