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
							Advanced Product R&D and Manufacturing Solutions
						</h1>
					</div>
					<h1 className="capitalize text-[1.5rem] font-bold pt-[1rem] leading-snug">
						Tailored Services for Custom Electronics Development
					</h1>

					<div className="mt-5 w-3/4 list-elements">
						<ul>
							<li>
								<IconList />
								<p>Custom Electronics Development</p>
							</li>
							<li>
								<IconList />
								<p>Firmware Development</p>
							</li>
							<li>
								<IconList />
								<p>Computer Simulation</p>
							</li>
							<li>
								<IconList />
								<p>Enclosure Design</p>
							</li>
							<li>
								<IconList />
								<p>Rapid Prototyping</p>
							</li>
							<li>
								<IconList />
								<p>Manufacturing Support & Sourcing</p>
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
