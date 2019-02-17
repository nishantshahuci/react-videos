import React from 'react';

const renderComponent = video => {
    if (video) {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc} title="Video Player"/>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
}

const VideoDetail = ({video}) => {
    return <div>{renderComponent(video)}</div>;
}

export default VideoDetail;
