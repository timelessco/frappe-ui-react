"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
	"peer inline-flex w-full appearance-none items-center justify-center outline-none transition focus:text-ink-gray-7 focus:ring-2 focus:ring-focus-light-default disabled:cursor-not-allowed disabled:select-none",
	{
		variants: {
			size: {
				sm: "h-7 rounded-ef-4  px-ef-8 py-ef-6 text-ef-base font-ef-regular leading-[115%] tracking-[0.07px]",
				md: "h-8 rounded-ef-4 px-ef-10 py-ef-8 text-ef-base font-ef-regular leading-[115%] tracking-[0.07px]",
				lg: "h-10 rounded-ef-5 px-ef-12 py-ef-11 text-ef-base font-ef-regular leading-[115%] tracking-[0.07px]",
				xl: "h-10 rounded-ef-5 px-ef-14 py-[9.5px] text-ef-xl font-ef-regular leading-[115%] tracking-[0.18px]",
			},
			variant: {
				subtle:
					"bg-surface-gray-2 text-ink-gray-4 placeholder:text-ink-gray-4  focus:bg-surface-white ",
				outline:
					"border border-outline-gray-2 bg-surface-white placeholder:text-ink-gray-4",
			},
			disabled: {
				true: "bg-surface-gray-1 text-ink-gray-3 placeholder:text-ink-gray-3",
				false:
					"active:text-ink-gray-7 active:ring-2 active:ring-focus-light-default",
			},
			invalid: {
				true: "",
				false: "",
			},
		},
		compoundVariants: [
			{
				variant: "subtle",
				disabled: false,
				className: "hover:bg-surface-gray-3 ",
			},
			{
				variant: "outline",
				disabled: false,
				className: "hover:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.10)]",
			},
			{
				variant: "subtle",
				invalid: true,
				className: "bg-surface-red-2",
			},
			{
				variant: "outline",
				invalid: true,
				className: "border-outline-red-3",
			},
		],
		defaultVariants: {
			size: "sm",
			variant: "subtle",
		},
	},
);

const prefixVariants = cva(
	"pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center bg-transparent text-ink-gray-4 placeholder:text-ink-gray-4 peer-focus:text-ink-gray-7",
	{
		variants: {
			size: {
				sm: "px-ef-8",
				md: "pl-ef-10 pr-ef-8",
				lg: "pl-ef-12 pr-ef-8",
				xl: "pl-ef-14 pr-ef-10",
			},
		},
	},
);

const suffixVariants = cva(
	"pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center bg-transparent text-ink-gray-4 placeholder:text-ink-gray-4 peer-focus:text-ink-gray-7",
	{
		variants: {
			size: {
				sm: "pl-ef-13 pr-ef-8",
				md: "pl-ef-13 pr-ef-10",
				lg: "pl-ef-13 pr-ef-12",
				xl: "pl-ef-13 pr-ef-14",
			},
		},
	},
);

export interface InputProps
	extends Omit<
			React.InputHTMLAttributes<HTMLInputElement>,
			"disabled" | "prefix" | "size"
		>,
		VariantProps<typeof inputVariants> {
	asChild?: boolean;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			type,
			size = "md",
			variant = "subtle",
			invalid = false,
			disabled = false,
			asChild = false,
			prefix,
			suffix,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : "input";

		const [_, setHasPaddingCalculated] = React.useState(false);
		const inputInlineStyles = React.useRef<Record<string, number>>({});
		const prefixRef = React.useRef<HTMLDivElement>(null);
		const suffixRef = React.useRef<HTMLDivElement>(null);

		React.useLayoutEffect(() => {
			let key = "";

			const prefixElement = prefixRef.current;
			const suffixElement = suffixRef.current;

			if (prefix && prefixElement) {
				key = "paddingLeft";

				if (!key) return;
				inputInlineStyles.current[key] =
					prefixElement.getBoundingClientRect().width;
			}

			if (suffix && suffixElement) {
				key = "paddingRight";

				if (!key) return;
				inputInlineStyles.current[key] =
					suffixElement.getBoundingClientRect().width;
			}

			setHasPaddingCalculated(true);
		}, [prefix, suffix]);

		return (
			<div className="relative inline-flex w-full">
				<Comp
					type={type}
					className={cn(
						inputVariants({
							size,
							variant,
							invalid,
							disabled,
							className,
						}),
					)}
					disabled={disabled ?? false}
					ref={ref}
					style={{ ...inputInlineStyles.current }}
					{...props}
				/>

				{prefix && (
					<div ref={prefixRef} className={cn(prefixVariants({ size }))}>
						{prefix}
					</div>
				)}

				{suffix && (
					<div ref={suffixRef} className={cn(suffixVariants({ size }))}>
						{suffix}
					</div>
				)}
			</div>
		);
	},
);

Input.displayName = "Input";

export { Input };
