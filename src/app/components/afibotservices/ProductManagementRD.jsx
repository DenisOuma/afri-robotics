import Image from "next/image";
import React from "react";
import { IconList } from "../IconList";
import flowingMotheBD from "../../../../assets/images/r&d.png";

export const ProductManagementRD = () => {
	return (
		<div className="flex items-center justify-between   w-full">
			<div className="flex items-center justify-between m-auto full">
				<div className="mt-[1rem] w-6/5">
					<div className="flex items-center ">
						<div className="h-10 w-[6px] bg-secondary-color mr-[4px]"></div>
						<h1 className=" text-secondary-color font-[600] tracking-wider">
							STEM, Robotics, and AI Education
						</h1>
					</div>
					<h1 className="capitalize text-[1.5rem] font-bold pt-[1rem] leading-snug">
						Promoting Innovation, Skill Development, and Collaborative Learning
					</h1>

					<div className="mt-5 w-3/4 list-elements">
						<ul>
							<li>
								<IconList />
								<p>Robotics and AI Labs for K-12 and Higher Education</p>
							</li>
							<li>
								<IconList />
								<p>Apprenticeship Programs for Hands-On Experience</p>
							</li>
							<li>
								<IconList />
								<p>
									Coding and Robotics Festivals for Inspiring Creativity and
									Exploration
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="ml-40">
				<Image src={flowingMotheBD} alt="robot car" className="] w-[650px] " />
			</div>
		</div>
	);
};
