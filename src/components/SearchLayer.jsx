import React from 'react';
import ToggleButton from './ToggleButton.jsx';
import SearchTextInput from './SearchTextInput.jsx';
import VideoList from './VideoList.jsx';
import '../styles/search-layer.css';

class SearchLayer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            enabled: true
        };
        this.searchTimeoutRef = null;

        this.handleSearchToggle = this.handleSearchToggle.bind(this);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleVideoClick = this.handleVideoClick.bind(this);
    } 

    toggleEnabled(){
        this.setState(state => ({ enabled: !state.enabled }));
    }

    handleSearchToggle(ev){
        this.toggleEnabled();
        ev.preventDefault();
    }

    handleSearchTextChange(value){
        clearTimeout(this.searchTimeoutRef);
        this.searchTimeoutRef = setTimeout(() => this.props.onTermSearch(value), 500);
    }

    handleVideoClick(video){
        this.toggleEnabled();
        this.props.onVideoClick(video);
    }

    render(){
        const mode = this.props.currentVideo ? (this.state.enabled ? 'close' : 'open') : 'hide';

        return (
            <section className={`search-layer ${ this.state.enabled ? '' : 'hide' }`}>
                <div className='inner-row'>
                    <div className='minor'>
                        <ToggleButton mode={mode} onClick={this.handleSearchToggle} />
                    </div>
                    <div>
                        <SearchTextInput onChange={this.handleSearchTextChange} />
                    </div>
                </div>
                <div className='inner-row'>
                    <div className='minor'></div>
                    <VideoList videos={this.props.videos} fetchingVideos={this.props.fetchingVideos} onVideoClick={this.handleVideoClick} />
                </div>
            </section>
        );
    }
}

export default SearchLayer;
