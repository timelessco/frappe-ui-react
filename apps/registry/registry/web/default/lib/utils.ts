import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

import { type IconProps } from "@/components/ui/icon";

const customTwMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			"font-size": [
				{
					text: [
						"ef-tiny",
						"ef-2xs",
						"ef-xs",
						"ef-sm",
						"ef-base",
						"ef-lg",
						"ef-xl",
						"ef-2xl",
						"ef-3xl",
						"ef-4xl",
						"ef-5xl",
						"ef-6xl",
						"ef-7xl",
						"ef-8xl",
						"ef-9xl",
						"ef-10xl",
						"ef-11xl",
						"ef-12xl",
						"ef-13xl",
						"ef-14xl",
						"ef-15xl",
					],
				},
			],
			"font-weight": [
				{
					font: [
						"ef-regular",
						"ef-medium",
						"ef-semibold",
						"ef-bold",
						"ef-black",
					],
				},
			],
		},
	},
});

export function cn(...inputs: ClassValue[]) {
	return customTwMerge(clsx(inputs));
}

export function handleIconElement(
	element:
		| React.ComponentType<IconProps>
		| React.ReactElement<IconProps>
		| undefined,
	variantClassName: string,
) {
	if (!element) return null;

	return React.isValidElement(element)
		? React.cloneElement(element, {
				className: cn(variantClassName, element.props.className),
			} as IconProps)
		: null;
}
