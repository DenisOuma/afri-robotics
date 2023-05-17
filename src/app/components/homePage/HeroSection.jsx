import React from "react";
import { MaxScreenSize } from "../MaxScreenSize";

export const HeroSection = () => {
	return (
		<div className="mt-[5rem] w-1/2 h-[560px] ">
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

					<div className="mt-5 w-3/4">
						<p className="text-[14px]">
							Robots takes operations to the next level. They work hand in hand
							with human balancing the imperative for safety with the need for
							flexibility and productivity.
						</p>
					</div>
				</div>
			</div>
			<div className="bottom-nav">
				<div className="m-auto w-full p-10 bg-background-color-talent flex items-center justify-between bg-opacity-90 px-[5rem]">
					<h1 className="capitalize text-[1.8rem] font-bold leading-snug mr-10">
						Tapping Intelligence through Talent.
					</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						quasi iusto, maiores nobis nostrum a? Incidunt quibusdam
						perspiciatis at nam nemo nobis, ut, iure dolores adipisci tempora
						aut ad velit neque
					</p>
				</div>
			</div>
		</div>
	);
};
