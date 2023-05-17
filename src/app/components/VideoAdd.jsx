import React from "react";
import ReactPlayer from "react-player";
export const VideoComponent = () => {
	return (
		<div className="video-container">
			<div className="top-color"></div>
			<video autoPlay loop muted className="video-element w-full">
				<source src="/videos/advert_ZjR1p0cU.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};
