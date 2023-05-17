import React from "react";
import { MaxScreenSize } from "../MaxScreenSize";

export const HeroSection = () => {
	return (
		<div className="mt-[5rem] w-1/2">
			<div className="hero-more">
				<div className="flex items-center">
					<div className="h-10 w-[6px] bg-secondary-color mr-[4px]"></div>
					<h1 className="uppercase text-secondary-color font-[500] tracking-wider">
						Next Generation Platform
					</h1>
				</div>
				<div className="mt-[1rem]">
					<h1 className="capitalize text-[2.8rem] font-bold leading-snug">
						Discover Afri{" "}
						<span className="text-secondary-color ">Robotics Ai</span> infrence
						Platform
					</h1>
				</div>
			</div>
		</div>
	);
};
