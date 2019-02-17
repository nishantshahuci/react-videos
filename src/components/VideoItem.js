import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    const title = video.snippet.title;
    const imageSrc = video.snippet.thumbnails.medium.url;
    return (
        <div className="item video-item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" src={imageSrc} alt={title} />
            <div className="content">
                <div className="header">
                    {title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
