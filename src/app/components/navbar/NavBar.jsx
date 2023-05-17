import React from "react";
import { Logo } from "../afribotlogo/Logo";
import { Button } from "../Button";

export const NavBar = () => {
	return (
		<div className="w-full flex items-center justify-between ">
			<Logo />
			<div className="flex items-center justify-between nav-bar-links">
				<ul className="w-full flex items-center capitalize">
					<li>Home</li>
					<li>services</li>
					<li>Robotics</li>
					<li>projects</li>
					<li>About Us</li>
				</ul>
			</div>
			<Button className="flex mx-5 uppercase p-10 rounded btn-primary" primary>
				Get Started
			</Button>
		</div>
	);
};
