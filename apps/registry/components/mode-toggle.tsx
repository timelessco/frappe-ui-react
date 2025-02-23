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
import { cn } from "@/lib/utils";

export function ModeToggle(props: React.ComponentProps<typeof Button>) {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" iconOnly={<ModeToggleIcon />} {...props} />
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

const ModeToggleIcon = ({ className, ...props }: IconProps) => {
	const { theme } = useTheme();

	const hasMounted = useHasMounted();
	if (!hasMounted) {
		return null;
	}

	if (theme === "dark") {
		return (
			<Moon
				className={cn(
					"inline-block size-[1em] shrink-0 align-middle leading-[1em]",
					className,
				)}
				{...props}
			/>
		);
	}

	return (
		<Sun
			className={cn(
				"inline-block size-[1em] shrink-0 align-middle leading-[1em]",
				className,
			)}
			{...props}
		/>
	);
};

function useHasMounted() {
	const [hasMounted, setHasMounted] = React.useState(false);
	React.useEffect(() => {
		setHasMounted(true);
	}, []);
	return hasMounted;
}
