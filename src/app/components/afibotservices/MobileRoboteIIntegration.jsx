import Image from "next/image";
import React from "react";
import { IconList } from "../IconList";
import deliveryBot from "../../../../assets/images/deliveryBot.png";
export const MobileRoboteIIntegration = () => {
	return (
		<div className="flex items-center justify-between   w-full">
			<div className="ml-40">
				<Image src={deliveryBot} alt="robot car" className="] w-[850px] " />
			</div>
			<div className="flex items-center justify-between m-auto full">
				<div className="mt-[1rem] w-6/5">
					<div className="flex items-center ">
						<div className="h-10 w-[6px] bg-secondary-color mr-[4px]"></div>
						<h1 className=" text-secondary-color font-[600] tracking-wider">
							Seamless Integration of Mobile Robots
						</h1>
					</div>
					<h1 className="capitalize text-[1.5rem] font-bold pt-[1rem] leading-snug">
						Transforming Industries with Innovative Robotic Solutions
					</h1>

					<div className="mt-5 w-3/4 list-elements">
						<ul>
							<li>
								<IconList />
								<p>Delivery Robots</p>
							</li>
							<li>
								<IconList />
								<p>Inventory Tracking Robots</p>
							</li>
							<li>
								<IconList />
								<p>Cleaning Robots</p>
							</li>
							<li>
								<IconList />
								<p>Hospitality Robots</p>
							</li>
							<li>
								<IconList />
								<p>Assisted Living Robots</p>
							</li>
							<li>
								<IconList />
								<p>Research Robots</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
