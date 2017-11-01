import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (probs) => {
    const videoItems = probs.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={probs.onVideoSelect}
                key={video.etag}
                video={video}
            />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;
