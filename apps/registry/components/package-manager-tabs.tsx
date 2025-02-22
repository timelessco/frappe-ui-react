"use client";

import * as React from "react";

import { Tabs } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface PackageManagerTabsProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	defaultValue?: string;
}

export function PackageManagerTabs({
	defaultValue,
	className,
	children,
	...props
}: PackageManagerTabsProps) {
	return (
		<Tabs
			defaultValue={defaultValue}
			className={cn("w-full", className)}
			{...props}
			dir="ltr"
		>
			{children}
		</Tabs>
	);
}
