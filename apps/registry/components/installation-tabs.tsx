"use client";

import * as React from "react";

import { Tabs } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface InstallationTabsProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	defaultValue?: string;
}

export function InstallationTabs({
	defaultValue,
	className,
	children,
	...props
}: InstallationTabsProps) {
	return (
		<Tabs
			defaultValue={defaultValue}
			className={cn("w-full space-y-4", className)}
			{...props}
			dir="ltr"
		>
			{children}
		</Tabs>
	);
}
