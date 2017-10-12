import React from 'react';
import '../styles/video-layer.css';

const YT_VIDEO_ID = 'yt-video';

class VideoLayer extends React.Component{
    constructor(props){
        super(props);

        this.player = null;
        this.currentVideoId = null;
    }

    shouldComponentUpdate(props){
        return !(props.video && props.video.id.videoId === this.currentVideoId);
    }

    componentWillUpdate(props){
        if(this.player && this.currentVideoId !== props.video.id.videoId)
            this.unmountPlayer();
    }

    componentDidUpdate(){
        if(!(this.props.youtubeIframeAPIStatus && this.props.video))
            return;

        this.currentVideoId = this.props.video.id.videoId;
        this.player = new YT.Player(YT_VIDEO_ID, Object.assign(this.componentSize(), {
            videoId: this.currentVideoId,
            events: {
                onReady: ev => ev.target.playVideo()
            }
        }));
    }

    componentWillUnmount(){
        if(this.player)
            this.unmountPlayer();
    }

    componentSize(){
        return {
            width: this.sectionElement.offsetWidth,
            height: this.sectionElement.offsetHeight
        };
    }

    unmountPlayer(){
        this.player.destroy();
        this.player = null;
    }

    render(){
        return (
            <section className='video-layer' ref={el => this.sectionElement = el}>
                <div id={YT_VIDEO_ID}></div>
            </section>
        );
    }
}

export default VideoLayer;
