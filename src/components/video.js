import React, { Component } from 'react'

class Video extends Component {
	
	render(){
		const { video } = this.props
		return(
			<li onClick={() => { this.props.onVideoClick(video)} } className='list-group-item row video-item'>
				<div className='col-md-3'>
					<img src={video.snippet.thumbnails.default.url}/>
				</div>
				<span>
					{video.snippet.title}
				</span>
			</li>
		)
	}
}

export default Video
