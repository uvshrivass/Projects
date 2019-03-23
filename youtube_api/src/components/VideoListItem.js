import React from 'react';

const VideosItem = (props)=>{
	return(
		<div> 
			<div> 
				
				<h3> {props.item}</h3>
				<div> {props.item} </div>

			</div>
		</div>
	)	
}

export default VideosItem;