import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";

export interface IconProps extends ComponentProps<"svg"> {
	/**
	 * If it has a label, the icon will be given a role of "img" for accessibility
	 * If it does not have a label, the icon will be hidden from screen readers
	 */
	ariaLabel?: string;
}

// For accessibility - https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/
// Default: aria hidden props are used as the majority of icons are decorative
export const Icon = ({
	ariaLabel = undefined,
	className,
	children,
	...props
}: IconProps) => {
	const ariaLabelProps: AriaHiddenProps | AriaLabelProps = ariaLabel
		? {
				role: "img",
			}
		: {
				"aria-hidden": "true",
				focusable: "false",
			};

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={cn(
				"inline-block h-[1em] w-[1em] shrink-0 align-middle leading-[1em]",
				className,
			)}
			viewBox="0 0 24 24"
			{...ariaLabelProps}
			{...props}
		>
			{ariaLabel ? <title>{ariaLabel}</title> : null}
			{children}
		</svg>
	);
};

interface AriaLabelProps {
	role: ComponentProps<"svg">["role"];
}

interface AriaHiddenProps {
	"aria-hidden": ComponentProps<"svg">["aria-hidden"];
	focusable: ComponentProps<"svg">["focusable"];
}
