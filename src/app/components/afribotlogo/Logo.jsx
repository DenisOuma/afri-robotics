import Image from "next/image";
import React from "react";
import ImageLogo from "../../../../images/Screenshot_from_2023-05-17_02-28-25-removebg-preview.png";
export const Logo = () => {
	return (
		<div className="">
			<Image
				src={ImageLogo}
				alt="Jumia Logo"
				className="object-cover h-10 w-[15rem]"
			/>
		</div>
	);
};
