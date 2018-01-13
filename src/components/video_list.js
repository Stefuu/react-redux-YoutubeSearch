import React, { Component } from 'react'
import Video from '../containers/video'

class VideoList extends Component {
	
	renderVideos() {
		return this.props.videos.map(video => <Video video={video} key={video.etag} />)
	}

	renderCurrentVideo(currentVideo) {
		if(!currentVideo)
			return <div></div>

		return (
				<iframe 
					width="100%" 
					height="500" 
					src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
					frameBorder="0" 
					allowFullScreen>
				</iframe>
		)
	}

	render() {
		const { currentVideo, videos, isFetching } = this.props

		if(!videos)
			return <div></div>

    	return (
			<div>
				<div className={!isFetching ? 'hide' : ''}>
					Loading...
				</div>
				<div className={!currentVideo ? 'hide' : ''}>
					{this.renderCurrentVideo(currentVideo)}
				</div>
				<ul className='list-group'>
					{this.renderVideos()}
				</ul>
			</div>
		)
	}
}

export default VideoList