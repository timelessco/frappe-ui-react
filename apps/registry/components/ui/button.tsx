"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { type IconProps } from "@/components/ui/icon";
import { cn, handleIconElement } from "@/lib/utils";

const buttonVariants = cva(
	"relative inline-flex select-none appearance-none items-center justify-center whitespace-nowrap align-middle outline-none transition-all disabled:cursor-not-allowed",
	{
		variants: {
			variant: {
				solid:
					"bg-surface-gray-7 text-ink-white hover:bg-surface-gray-6 focus-visible:bg-surface-gray-7 focus-visible:ring-2 focus-visible:ring-focus-light-default active:bg-surface-gray-5 disabled:bg-surface-gray-2 disabled:text-ink-gray-4",
				subtle:
					"bg-surface-gray-2 text-ink-gray-7 hover:bg-surface-gray-3 focus-visible:bg-surface-gray-2 focus-visible:ring-2 focus-visible:ring-focus-light-default active:bg-surface-gray-4 disabled:bg-surface-gray-2 disabled:text-ink-gray-4",
				outline:
					"border border-outline-gray-2 text-ink-gray-7 hover:border-outline-gray-3 focus-visible:bg-surface-gray-2 focus-visible:ring-2 focus-visible:ring-focus-light-default active:border-outline-gray-4 active:bg-surface-gray-4 disabled:bg-surface-gray-2 disabled:text-ink-gray-4",
				ghost:
					"bg-transparent text-ink-gray-7 hover:bg-surface-gray-3 focus-visible:bg-surface-gray-2 focus-visible:ring-2 focus-visible:ring-focus-light-default active:bg-surface-gray-4 disabled:bg-surface-gray-2 disabled:text-ink-gray-4",
			},
			size: {
				sm: "min-h-7 w-auto min-w-7 gap-ef-8 rounded-ef-4 px-ef-8 py-ef-6 text-ef-base font-ef-regular leading-[115%] tracking-[0.07px]",
				md: "min-h-7 w-auto min-w-7 gap-ef-8 rounded-ef-4 px-ef-10 py-ef-7 text-ef-base font-ef-medium leading-[115%] tracking-[0.07px]",
				lg: "min-h-7 w-auto min-w-7 gap-ef-8 rounded-ef-5 px-ef-12 py-ef-10 text-ef-lg font-ef-medium leading-[115%] tracking-[0.08px]",
				xl: "min-h-7 w-auto min-w-7 gap-ef-8 rounded-ef-4 px-ef-13 py-ef-11 text-ef-xl font-ef-medium leading-[115%] tracking-[0.18px]",
				"2xl":
					"min-h-7 w-auto min-w-7 gap-ef-8 rounded-ef-4 px-ef-16 py-ef-13 text-ef-2xl font-ef-medium leading-[115%] tracking-[0.1px]",
			},
		},
		defaultVariants: {
			variant: "solid",
			size: "sm",
		},
	},
);

const prefixVariants = cva("", {
	variants: {
		size: {
			sm: "text-ef-lg",
			md: "text-ef-xl",
			lg: "text-ef-2xl",
			xl: "text-ef-3xl",
			"2xl": "text-ef-3xl",
		},
	},
	defaultVariants: {
		size: "sm",
	},
});

const suffixVariants = cva("", {
	variants: {
		size: {
			sm: "text-ef-lg",
			md: "text-ef-xl",
			lg: "text-ef-2xl",
			xl: "text-ef-3xl",
			"2xl": "text-ef-3xl",
		},
	},
	defaultVariants: {
		size: "sm",
	},
});

export interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "prefix">,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	prefix?: React.ComponentType<IconProps> | React.ReactElement<IconProps>;
	suffix?: React.ComponentType<IconProps> | React.ReactElement<IconProps>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			prefix,
			suffix,
			children,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : "button";

		const prefixContent = handleIconElement(prefix, prefixVariants({ size }));
		const suffixContent = handleIconElement(suffix, suffixVariants({ size }));

		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			>
				{asChild ? (
					children
				) : (
					<ButtonContent
						prefixContent={prefixContent}
						suffixContent={suffixContent}
					>
						{children}
					</ButtonContent>
				)}
			</Comp>
		);
	},
);
Button.displayName = "Button";

interface ButtonContentProps {
	children: React.ReactNode;
	prefixContent: React.ReactNode;
	suffixContent: React.ReactNode;
}

const ButtonContent = ({
	children,
	prefixContent,
	suffixContent,
}: ButtonContentProps) => {
	return (
		<>
			{prefixContent}
			<span>{children}</span>
			{suffixContent}
		</>
	);
};

export { Button, buttonVariants };
