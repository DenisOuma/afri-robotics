import Image from "next/image";
import React from "react";
// import Icon from "@iconify/react";
import robotImage from "../../../../assets/images/robotcar-removebg-preview.png";
export const StemEducation = () => {
	return (
		<div className="flex items-center justify-between   w-full">
			<div className="ml-40">
				<Image
					src={robotImage}
					alt="robot car"
					className="h-[250px] w-[550px] "
				/>
			</div>
			<div className="flex items-center justify-between m-auto full">
				<div className="mt-[1rem] w-3/4">
					<div className="flex items-center">
						<div className="h-10 w-[6px] bg-secondary-color mr-[4px]"></div>
						<h1 className=" text-secondary-color font-[600] tracking-wider">
							STEM, Robotics, and AI Education
						</h1>
					</div>
					<h1 className="capitalize text-[2rem] font-bold leading-snug">
						Promoting Innovation, Skill Development, and Collaborative Learning
					</h1>

					<div className="mt-5 w-3/4">
						<p className="text-[14px]">
							Robots takes operations to the next level. They work hand in hand
							with human balancing the imperative for safety with the need for
							flexibility and productivity.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};