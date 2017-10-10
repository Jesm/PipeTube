import React from 'react';
import '../styles/video-thumbnail-link.css';

const VideoThumbnailLink = props => (
    <a href='javascript:void(0)' className='video-thumbnail-link' onClick={props.onClick}>
        <img src={props.video.thumbnail} alt={props.video.title} className='thumbnail' />
        <span className='title'>{props.video.title}</span>
    </a>
);

export default VideoThumbnailLink;
