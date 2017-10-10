import React from 'react';
import VideoThumbnailLink from './VideoThumbnailLink.jsx';
import '../styles/video-list.css';

const VideoList = props => (
    <ul className={`video-list ${ props.fetchingVideos ? 'loading' : '' }`}>
        {props.videos.map(video =>
            <li key={video.id}>
                <VideoThumbnailLink video={video} onClick={() => props.onVideoClick(video)} />
            </li>
        )}
    </ul>
);

export default VideoList;
