"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";

import { Icon, type IconProps } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type AvatarSize = AvatarProps["size"];

const AvatarContext = React.createContext<{
	size?: AvatarSize;
}>({});

// const AvatarGroupContext = React.createContext<{ inGroup: boolean }>({
// 	inGroup: false,
// });

// const useAvatarGroup = () => {
// 	return React.useContext(AvatarGroupContext);
// };

interface AvatarProps
	extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
		VariantProps<typeof avatarVariants> {
	status?: Status;
}

const Avatar = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Root>,
	AvatarProps
>(({ className, size = "md", squared = false, status, ...props }, ref) => {
	// const { inGroup } = useAvatarGroup();
	const value = React.useMemo(() => ({ size, squared }), [size, squared]);

	return (
		<AvatarContext.Provider value={value}>
			<div className="relative">
				<AvatarPrimitive.Root
					ref={ref}
					className={cn(avatarVariants({ size, squared }), className)}
					{...props}
				/>
				<StatusIndicator status={status} />
				{/* {inGroup && (
					<div
						className={cn(
							ringVariants({ size }),
							"ring-background ring-offset-background",
						)}
					/>
				)} */}
			</div>
		</AvatarContext.Provider>
	);
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Image>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={cn("aspect-square h-full w-full", className)}
		{...props}
	/>
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Fallback>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => {
	const { size } = React.useContext(AvatarContext);

	return (
		<AvatarPrimitive.Fallback
			ref={ref}
			className={cn(fallbackVariants({ size }), className)}
			{...props}
		/>
	);
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const AvatarIcon = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
	const { size } = React.useContext(AvatarContext);

	return (
		<span
			ref={ref}
			className={cn(iconVariants({ size }), className)}
			{...props}
		/>
	);
});
AvatarIcon.displayName = "AvatarIcon";

// export { Avatar, AvatarFallback, AvatarGroupContext, AvatarIcon, AvatarImage };
export { Avatar, AvatarFallback, AvatarIcon, AvatarImage };

const avatarVariants = cva(
	"relative flex shrink-0 items-center justify-center overflow-hidden bg-surface-gray-2 text-ink-gray-7",
	{
		variants: {
			size: {
				xs: "size-4",
				sm: "size-5",
				md: "size-6",
				lg: "size-7",
				xl: "size-8",
				"2xl": "size-10",
				"3xl": "size-[46px]",
			},
			squared: {
				true: "",
				false: "rounded-full",
			},
		},
		compoundVariants: [
			{
				size: "xs",
				squared: true,
				className: "rounded-ef-1",
			},
			{
				size: "sm",
				squared: true,
				className: "rounded-ef-2",
			},
			{
				size: "md",
				squared: true,
				className: "rounded-ef-2",
			},
			{
				size: "lg",
				squared: true,
				className: "rounded-ef-3",
			},
			{
				size: "xl",
				squared: true,
				className: "rounded-ef-3",
			},
			{
				size: "2xl",
				squared: true,
				className: "rounded-ef-4",
			},
			{
				size: "3xl",
				squared: true,
				className: "rounded-ef-5",
			},
		],
		defaultVariants: {
			size: "md",
		},
	},
);

const fallbackVariants = cva("flex items-center justify-center uppercase", {
	variants: {
		size: {
			xs: "text-ef-tiny font-medium leading-[115%]",
			sm: "text-ef-sm font-medium leading-[115%]",
			md: "text-ef-base font-medium leading-[115%]",
			lg: "text-ef-base font-semibold leading-[115%]",
			xl: "text-ef-lg font-semibold leading-[115%]",
			"2xl": "text-ef-xl font-bold leading-[115%]",
			"3xl": "text-ef-2xl font-bold leading-[115%]",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

const iconVariants = cva(
	"inline-flex items-center justify-center text-ink-gray-6",
	{
		variants: {
			size: {
				xs: "text-[10px]",
				sm: "text-ef-xs",
				md: "text-ef-base",
				lg: "text-ef-lg",
				xl: "text-ef-xl",
				"2xl": "text-ef-2xl",
				"3xl": "text-[22px]",
			},
		},
		defaultVariants: {
			size: "md",
		},
	},
);

const statusIndicatorVariants = cva(
	"absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-outline-white ring-outline-white",
	{
		variants: {
			size: {
				xs: "text-[4px] ring-1",
				sm: "text-[5px] ring-1",
				md: "text-[6px] ring-1",
				lg: "text-[8px] ring-2",
				xl: "text-[8px] ring-2",
				"2xl": "text-[10px] ring",
				"3xl": "text-ef-xs ring",
			},
		},
		defaultVariants: {
			size: "md",
		},
	},
);

type Status = "active" | "away" | "pin" | "pinned" | "sleep";

interface StatusIndicatorProps extends React.ComponentProps<"div"> {
	status?: Status;
}

const StatusIndicator = ({
	status,
	className,
	...props
}: StatusIndicatorProps) => {
	const { size } = React.useContext(AvatarContext);
	if (!status) {
		return null;
	}

	return (
		<div
			aria-label="status indicator"
			className={cn(statusIndicatorVariants({ size }), className)}
			{...props}
		>
			{status === "active" && <ActiveStatusIndicator />}
			{status === "away" && <AwayStatusIndicator />}
			{status === "sleep" && <SleepStatusIndicator />}
			{status === "pinned" && <PinnedStatusIndicator />}
			{status === "pin" && <PinStatusIndicator />}
		</div>
	);
};

const ActiveStatusIndicator = ({ className, ...props }: IconProps) => (
	<Icon
		fill="none"
		viewBox="0 0 4 4"
		className={cn("text-ink-green-4", className)}
		{...props}
	>
		<circle cx="2" cy="2" r="2" fill="currentColor" />
	</Icon>
);

const AwayStatusIndicator = ({ className, ...props }: IconProps) => (
	<Icon
		fill="none"
		viewBox="0 0 19 18"
		className={cn("text-ink-gray-5", className)}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M9.5 17a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-3a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
			clipRule="evenodd"
		/>
	</Icon>
);

const SleepStatusIndicator = ({ className, ...props }: IconProps) => (
	<Icon
		fill="none"
		viewBox="0 0 19 18"
		className={cn("text-ink-gray-5", className)}
		{...props}
	>
		<path
			fill="currentColor"
			d="M17.48 9.72c.01-.09-.1-.14-.16-.08a6 6 0 0 1-8.45-8.45c.05-.08 0-.18-.09-.17a8 8 0 1 0 8.7 8.7Z"
		/>
	</Icon>
);

const PinnedStatusIndicator = ({ className, ...props }: IconProps) => (
	<Icon
		fill="none"
		viewBox="0 0 21 22"
		className={cn("text-ink-gray-5", className)}
		{...props}
	>
		<path
			fill="currentColor"
			d="m17.63 8.76-4.89-4.89c-.53-.53-.8-.8-1.08-.85a.95.95 0 0 0-.7.14C7.68 5.3 9.18 7.82 4.15 8.83c-1.84.37-2.22 1.13-.78 2.56l2.5 2.5-2.22 2.22a1 1 0 0 0 0 1.42l.38.38a1 1 0 0 0 1.41 0l2.22-2.22 2.44 2.43c1.43 1.44 2.2 1.06 2.56-.77 1-5.04 3.53-3.54 5.67-6.8a.9.9 0 0 0 .14-.71c-.06-.28-.32-.55-.85-1.08Z"
		/>
	</Icon>
);

const PinStatusIndicator = ({ className, ...props }: IconProps) => (
	<Icon
		fill="none"
		viewBox="0 0 21 22"
		className={cn("text-ink-gray-5", className)}
		{...props}
	>
		<path fill="#3BBDE5" d="M1.5 11a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" />
		<path
			fill="#fff"
			d="m15.62 9.39-3.5-3.51c-.4-.38-.58-.58-.78-.62a.68.68 0 0 0-.51.1C8.48 6.9 9.56 8.72 5.93 9.44c-1.3.26-1.58.81-.55 1.84l1.8 1.8-1.46 1.46a.91.91 0 1 0 1.29 1.29l1.46-1.46 1.75 1.75c1.03 1.03 1.58.76 1.84-.56.72-3.62 2.54-2.54 4.08-4.89.1-.15.13-.33.1-.5-.04-.2-.24-.4-.62-.78Z"
		/>
	</Icon>
);
