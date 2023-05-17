import React from "react";
import { Logo } from "../afribotlogo/Logo";
import { Button } from "../Button";

export const NavBar = () => {
	return (
		<div className="w-full flex items-center justify-between ">
			<Logo />
			<div className="flex items-center justify-between nav-bar-links w-90 ">
				<ul className="w-full flex items-center">
					<li>hello</li>
					<li>hello</li>
					<li>hello</li>
					<li>hello</li>
				</ul>
			</div>
			<Button className="flex mx-10 uppercase p-10" primary>
				Get Started
			</Button>
		</div>
	);
};
