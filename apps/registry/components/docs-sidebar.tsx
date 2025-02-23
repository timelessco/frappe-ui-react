"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

interface SidebarNavItem {
	disabled?: boolean;
	external?: boolean;
	href?: string;
	items?: SidebarNavItem[];
	label?: string;
	title: string;
}

export interface DocsSidebarNavProps {
	items: SidebarNavItem[];
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return items.length ? (
		<div className="w-full">
			<Button
				onClick={() => setIsOpen(!isOpen)}
				className="flex w-full items-center justify-between rounded-md px-4 py-2 lg:hidden"
			>
				<div className="flex items-center gap-2">
					<span className="font-medium">Navigation</span>
					<ChevronDown
						className={cn(
							"h-4 w-4 transition-transform",
							isOpen && "rotate-180",
						)}
					/>
				</div>
			</Button>
			<nav
				className={cn(
					"lg:sticky lg:top-16",
					"overflow-hidden transition-all duration-200 ease-in-out",
					isOpen
						? "max-h-[1000px] opacity-100"
						: "max-h-0 opacity-0 lg:max-h-[1000px] lg:opacity-100",
				)}
			>
				{items.map((item) => (
					<div key={item.title} className={cn("pb-4")}>
						{item.href ? (
							<Link
								href={item.href}
								className={cn(
									"mb-1 block rounded-md px-2 py-1 text-sm font-semibold transition-colors hover:bg-muted",
									pathname === item.href
										? "bg-muted text-foreground"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								{item.title}
							</Link>
						) : (
							<h4 className="mb-1 rounded-md px-2 py-1 text-ef-sm font-ef-semibold text-ink-gray-7">
								{item.title}
							</h4>
						)}
						{item?.items?.length && (
							<DocsSidebarNavItems items={item.items} pathname={pathname} />
						)}
					</div>
				))}
			</nav>
		</div>
	) : null;
}

interface DocsSidebarNavItemsProps {
	items: SidebarNavItem[];
	pathname: null | string;
}

export function DocsSidebarNavItems({
	items,
	pathname,
}: DocsSidebarNavItemsProps) {
	return items?.length ? (
		<div className="grid grid-flow-row auto-rows-max pl-4 text-sm">
			{items
				.sort((a, b) => a.title.localeCompare(b.title))
				.map((item) =>
					item.href && !item.disabled ? (
						<Link
							key={item.title}
							href={item.href}
							className={cn(
								"group flex w-full items-center rounded-md border border-transparent px-2 py-1 transition-colors hover:bg-muted",
								item.disabled && "cursor-not-allowed opacity-60",
								pathname === item.href
									? "bg-muted font-medium text-foreground"
									: "text-muted-foreground hover:text-foreground",
							)}
							target={item.external ? "_blank" : ""}
							rel={item.external ? "noreferrer" : ""}
						>
							{item.title}
							{item.label && (
								<span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
									{item.label}
								</span>
							)}
						</Link>
					) : (
						<span
							key={item.title}
							className={cn(
								"flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground",
								item.disabled && "opacity-60",
							)}
						>
							{item.title}
							{item.label && (
								<span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
									{item.label}
								</span>
							)}
						</span>
					),
				)}
		</div>
	) : null;
}
