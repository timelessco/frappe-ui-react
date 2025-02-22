"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

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

	return items.length ? (
		<div className="w-full py-8">
			{items.map((item) => (
				<div key={item.title} className={cn("pb-4")}>
					{item.href ? (
						<Link
							href={item.href}
							className={cn(
								"mb-1 rounded-md px-2 py-1 text-sm font-semibold hover:underline",
								pathname === item.href
									? "text-foreground"
									: "text-muted-foreground",
							)}
						>
							{item.title}
						</Link>
					) : (
						<h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
							{item.title}
						</h4>
					)}
					{item?.items?.length && (
						<DocsSidebarNavItems items={item.items} pathname={pathname} />
					)}
				</div>
			))}
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
								"group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
								item.disabled && "cursor-not-allowed opacity-60",
								pathname === item.href
									? "font-medium text-foreground"
									: "text-muted-foreground",
							)}
							target={item.external ? "_blank" : ""}
							rel={item.external ? "noreferrer" : ""}
						>
							{item.title}
							{item.label && (
								<span className="ml-2 rounded-md bg-ink-gray-1 px-1.5 py-0.5 text-xs leading-none text-ink-gray-7 no-underline group-hover:no-underline">
									{item.label}
								</span>
							)}
						</Link>
					) : (
						<span
							key={item.title}
							className={cn(
								"flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
								item.disabled && "cursor-not-allowed opacity-60",
							)}
						>
							{item.title}
							{item.label && (
								<span className="ml-2 rounded-md bg-ink-gray-2 px-1.5 py-0.5 text-xs leading-none text-ink-gray-7 no-underline group-hover:no-underline">
									{item.label}
								</span>
							)}
						</span>
					),
				)}
		</div>
	) : null;
}
