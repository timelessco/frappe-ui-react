"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { type IconProps } from "@/components/ui/icon";
import { cn, handleIconElement } from "@/lib/utils";

export interface BadgeProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "prefix">,
		VariantProps<typeof badgeVariants> {
	asChild?: boolean;
	prefix?: React.ComponentType<IconProps> | React.ReactElement<IconProps>;
	suffix?: React.ComponentType<IconProps> | React.ReactElement<IconProps>;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
	(
		{
			className,
			theme = "default",
			variant = "solid",
			size = "md",
			asChild = false,
			prefix,
			suffix,
			children,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : "div";
		const prefixContent = handleIconElement(prefix, iconVariants({ size }));
		const suffixContent = handleIconElement(suffix, iconVariants({ size }));

		return (
			<Comp
				ref={ref}
				className={cn(badgeVariants({ theme, variant, size, className }))}
				{...props}
			>
				{asChild ? (
					children
				) : (
					<>
						{prefixContent}
						<span>{children}</span>
						{suffixContent}
					</>
				)}
			</Comp>
		);
	},
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };

const badgeVariants = cva(
	"relative inline-flex items-center justify-center gap-ef-4 whitespace-nowrap border align-middle transition-all",
	{
		variants: {
			theme: {
				default: "",
				blue: "",
				green: "",
				amber: "",
				red: "",
				violet: "",
			},
			variant: {
				solid: "",
				subtle: "",
				outline: "",
				ghost: "",
			},
			size: {
				sm: "min-h-4 min-w-4 gap-ef-4 rounded-ef-9 border px-ef-6 py-ef-1 text-ef-xs leading-[115%]",
				md: "min-h-4 min-w-4 gap-ef-4 rounded-ef-9 border px-ef-6 py-ef-3 text-ef-xs leading-[115%]",
				lg: "min-h-6 min-w-6 gap-ef-4 rounded-ef-9 border px-ef-8 py-[4.5px] text-ef-sm leading-[115%] tracking-[0.065px]",
			},
		},
		compoundVariants: [
			{
				theme: "default",
				variant: "solid",
				className: "border-transparent bg-surface-gray-7 text-ink-white",
			},
			{
				theme: "default",
				variant: "subtle",
				className: "border-transparent bg-surface-gray-2 text-ink-gray-6",
			},
			{
				theme: "default",
				variant: "outline",
				className: "border-outline-gray-2 text-ink-gray-6",
			},
			{
				theme: "default",
				variant: "ghost",
				className: "b-transparent text-ink-gray-6",
			},
			{
				theme: "blue",
				variant: "solid",
				className: "border-transparent bg-surface-blue-5 text-ink-blue-1",
			},
			{
				theme: "blue",
				variant: "subtle",
				className: "border-transparent bg-surface-blue-2 text-ink-blue-4",
			},
			{
				theme: "blue",
				variant: "outline",
				className: "border-outline-blue-2 text-ink-blue-4",
			},
			{
				theme: "blue",
				variant: "ghost",
				className: "b-transparent text-ink-blue-4",
			},
			{
				theme: "green",
				variant: "solid",
				className: "border-transparent bg-surface-green-5 text-ink-green-1",
			},
			{
				theme: "green",
				variant: "subtle",
				className: "border-transparent bg-surface-green-2 text-ink-green-4",
			},
			{
				theme: "green",
				variant: "outline",
				className: "border-outline-green-2 text-ink-green-4",
			},
			{
				theme: "green",
				variant: "ghost",
				className: "border-transparent text-ink-green-4",
			},
			{
				theme: "amber",
				variant: "solid",
				className: "border-transparent bg-surface-amber-5 text-ink-amber-1",
			},
			{
				theme: "amber",
				variant: "subtle",
				className: "border-transparent bg-surface-amber-2 text-ink-amber-4",
			},
			{
				theme: "amber",
				variant: "outline",
				className: "border-outline-amber-2 text-ink-amber-4",
			},
			{
				theme: "amber",
				variant: "ghost",
				className: "border-transparent text-ink-amber-4",
			},
			{
				theme: "red",
				variant: "solid",
				className: "border-transparent bg-surface-red-5 text-ink-red-1",
			},
			{
				theme: "red",
				variant: "subtle",
				className: "border-transparent bg-surface-red-2 text-ink-red-4",
			},
			{
				theme: "red",
				variant: "outline",
				className: "border-outline-red-2 text-ink-red-4",
			},
			{
				theme: "red",
				variant: "ghost",
				className: "border-transparent text-ink-red-4",
			},
			{
				theme: "violet",
				variant: "solid",
				className: "border-transparent bg-surface-violet-5 text-ink-violet-1",
			},
			{
				theme: "violet",
				variant: "subtle",
				className: "border-transparent bg-surface-violet-2 text-ink-violet-3",
			},
			{
				theme: "violet",
				variant: "outline",
				className: "border-outline-violet-2 text-ink-violet-3",
			},
			{
				theme: "violet",
				variant: "ghost",
				className: "border-transparent text-ink-violet-3",
			},
		],
		defaultVariants: {
			theme: "default",
			variant: "solid",
			size: "md",
		},
	},
);

const iconVariants = cva("", {
	variants: {
		size: {
			sm: "text-[10px]",
			md: "text-ef-xs",
			lg: "text-ef-sm",
		},
	},
	defaultVariants: {
		size: "md",
	},
});
