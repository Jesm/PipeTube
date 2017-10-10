import React from 'react';
import '../styles/video-layer.css';

const VideoLayer = props => (
    <section className='video-layer'>
        <span>{ props.video ? `Displaying video #${props.video.id}` : null }</span>
    </section>
);

export default VideoLayer;
