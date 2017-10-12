import React from 'react';
import '../styles/video-thumbnail-link.css';

const VideoThumbnailLink = props => {
    const snippet = props.video.snippet;

    return (
        <a href='javascript:void(0)' className='video-thumbnail-link' title={snippet.title} onClick={props.onClick}>
            <img src={snippet.thumbnails.medium.url} alt={snippet.title} className='thumbnail' />
            <span className='title'>{snippet.title}</span>
        </a>
    );
};

export default VideoThumbnailLink;
