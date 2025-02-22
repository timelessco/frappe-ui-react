"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type IconProps } from "@/components/ui/icon";

export function ModeToggle(props: React.ComponentProps<typeof Button>) {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button iconOnly={<ModeToggleIcon />} {...props} />
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

const ModeToggleIcon = (props: IconProps) => {
	const { theme } = useTheme();

	return (
		<>
			<Sun
				suppressHydrationWarning
				className={`inline-block size-[1em] shrink-0 align-middle leading-[1em] ${
					theme === "dark" ? "hidden" : "block"
				}`}
				{...props}
			/>
			<Moon
				suppressHydrationWarning
				className={`inline-block size-[1em] shrink-0 align-middle leading-[1em] ${
					theme === "dark" ? "block" : "hidden"
				}`}
				{...props}
			/>
		</>
	);
};
