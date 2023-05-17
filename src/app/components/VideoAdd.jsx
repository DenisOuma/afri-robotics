// import React from "react";

// export const VideoComponent = () => {
// 	return (
// 		<video controls>
// 			<source src="/videos/advert.mp4" type="video/mp4" />
// 			Your browser does not support the video tag.
// 		</video>
// 	);
// };

import React from "react";
export const VideoComponent = () => {
	return (
		<div className="video-container">
			<div className="top-color"></div>
			<video autoPlay loop muted className="video-element w-full">
				<source src="/videos/advert.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};
