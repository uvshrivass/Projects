import React, { Component } from 'react';
import VideoListItem from './VideoListItem.js';



class VideoList extends Component{
	
	const videoItems = this.props.videos.map((video, index) => {
		
		return (
			<VideoListItem
				key={ index }
				video={video}/>
		)
	});

	render(){

		return (
			<div> 
				{props.children} 
				{videoItems} 
			</div>
		)

	}

}

export default VideosList;