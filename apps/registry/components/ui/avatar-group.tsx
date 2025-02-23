"use client";

import * as React from "react";
import { cva } from "class-variance-authority";

import {
	Avatar,
	AvatarFallback,
	type AvatarProps,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AvatarGroupContextValue {
	size?: NonNullable<AvatarProps["size"]>;
	squared?: NonNullable<AvatarProps["squared"]>;
}

const AvatarGroupContext = React.createContext<AvatarGroupContextValue>({});

export const useAvatarGroupContext = () => React.useContext(AvatarGroupContext);

const avatarGroupVariants = cva("flex items-center", {
	variants: {
		size: {
			xs: "-space-x-0.5",
			sm: "-space-x-1",
			md: "-space-x-1",
			lg: "-space-x-1",
			xl: "-space-x-1",
			"2xl": "-space-x-1.5",
			"3xl": "-space-x-2",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

interface AvatarGroupProps
	extends AvatarGroupContextValue,
		React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	max?: number;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
	({ children, className, size, squared, max, ...props }, ref) => {
		const { size: labelSize, squared: labelSquared } = React.useContext(
			AvatarLabelGroupContext,
		);

		const contextValue = React.useMemo(
			() => ({
				size: size ?? labelSize ?? "md",
				squared: squared ?? labelSquared ?? false,
			}),
			[size, squared, labelSize, labelSquared],
		);

		const avatarArray = React.Children.toArray(children);
		const visibleAvatars = max ? avatarArray.slice(0, max) : avatarArray;
		const excess = max ? avatarArray.length - max : 0;

		return (
			<AvatarGroupContext.Provider value={contextValue}>
				<div
					ref={ref}
					className={cn(avatarGroupVariants({ size }), className)}
					{...props}
				>
					{visibleAvatars.map((avatar, index) => (
						<div
							// eslint-disable-next-line react/no-array-index-key
							key={`avatar-${index}`}
							style={{ zIndex: visibleAvatars.length - index }}
						>
							{avatar}
						</div>
					))}
					{excess > 0 && (
						<Avatar>
							<AvatarFallback>{excess}</AvatarFallback>
						</Avatar>
					)}
				</div>
			</AvatarGroupContext.Provider>
		);
	},
);
AvatarGroup.displayName = "AvatarGroup";

const AvatarLabelGroupContext = React.createContext<AvatarGroupContextValue>(
	{},
);

interface AvatarLabelGroupProps
	extends AvatarGroupContextValue,
		React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

const AvatarLabelGroup = React.forwardRef<
	HTMLDivElement,
	AvatarLabelGroupProps
>(({ children, className, size, squared, ...props }, ref) => {
	const contextValue = React.useMemo(
		() => ({ size, squared }),
		[size, squared],
	);

	return (
		<AvatarLabelGroupContext.Provider value={contextValue}>
			<div ref={ref} className={cn("flex items-center", className)} {...props}>
				{children}
			</div>
		</AvatarLabelGroupContext.Provider>
	);
});

AvatarLabelGroup.displayName = "AvatarLabelGroup";

interface AvatarLabelProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

const AvatarLabel = React.forwardRef<HTMLDivElement, AvatarLabelProps>(
	({ children, className, ...props }, ref) => {
		const { size } = React.useContext(AvatarLabelGroupContext);

		return (
			<div
				ref={ref}
				className={cn(labelVariants({ size }), className)}
				{...props}
			>
				{children}
			</div>
		);
	},
);
AvatarLabel.displayName = "AvatarLabel";

export { AvatarGroup, AvatarLabel, AvatarLabelGroup };

const labelVariants = cva("font-medium leading-[115%] text-ink-gray-7", {
	variants: {
		size: {
			xs: "mr-ef-8 text-ef-tiny",
			sm: "mr-ef-8 text-ef-tiny",
			md: "mr-ef-12 text-ef-xs",
			lg: "mr-ef-12 text-ef-base tracking-[0.07px]",
			xl: "mr-ef-12 text-ef-lg tracking-[0.16px]",
			"2xl": "mr-ef-13 text-ef-xl tracking-[0.18px]",
			"3xl": "mr-ef-13 text-ef-2xl tracking-[0.1px]",
		},
	},
	defaultVariants: {
		size: "md",
	},
});
