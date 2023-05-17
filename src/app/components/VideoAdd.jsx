import React from "react";
export const VideoComponent = () => {
	return (
		<div className="video-container">
			<div className="top-color"></div>
			<video
				autoPlay
				loop
				muted
				className="video-element z-10 w-full h-[600px]"
			>
				<source src="/videos/advert.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};
