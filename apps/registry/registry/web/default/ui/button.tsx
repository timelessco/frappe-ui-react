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
					"bg-surface-gray-7 text-ef-base font-ef-regular leading-[115%] tracking-[0.07px] text-ink-white hover:bg-surface-gray-6 focus-visible:ring-2 focus-visible:ring-focus-light-default active:bg-surface-gray-5 disabled:bg-surface-gray-2 disabled:text-ink-gray-4",
			},
			size: {
				sm: "min-h-7 w-auto min-w-7 gap-ef-8 rounded-ef-4 px-ef-8 py-ef-6",
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
		variant: {
			solid: "text-ef-lg",
		},
	},
	defaultVariants: {
		variant: "solid",
	},
});

const suffixVariants = cva("", {
	variants: {
		variant: {
			solid: "text-ef-lg",
		},
	},
	defaultVariants: {
		variant: "solid",
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

		const prefixContent = handleIconElement(
			prefix,
			prefixVariants({ variant }),
		);
		const suffixContent = handleIconElement(
			suffix,
			suffixVariants({ variant }),
		);

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
