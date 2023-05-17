import React from "react";
import className from "classnames";
export const Button = ({
	children,
	primary,
	secondary,
	download,
	search,
	...rest
}) => {
	const classes = className(
		"flex text-[15px] hover:text-secondary-text-color  items-end py-2 font-[400]",
		{
			"bg-secondary-color text-[16px]": primary,
		},
		rest.className
	);
	return <button className={classes}>{children}</button>;
};
