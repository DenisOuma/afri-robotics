import React from "react";
import classNames from "classnames";

export const MaxScreenSize = ({ children, ...rest }) => {
	const classes = classNames(
		"w-full m-auto max-w-7xl items-center justify-between  text-sm",
		rest.className
	);
	return <div className={classes}>{children}</div>;
};
