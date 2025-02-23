"use client";

import { redirect } from "next/navigation";

import { DocsSidebarNav } from "@/components/docs-sidebar";
import { Navbar } from "@/components/navbar";
import registry from "@/registry.json";

interface RegistryItem {
	categories?: string[];
	meta?: {
		native?: boolean;
	};
	name: string;
	title: string;
	type: string;
}

export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const categoryGroups = registry.items
		.filter(
			(item: RegistryItem) =>
				item.type === "registry:ui" ||
				item.type === "registry:hook" ||
				item.name === "getting-started",
		)
		.reduce<
			Record<
				string,
				Array<{ href: string; isGettingStarted?: boolean; title: string }>
			>
		>((acc, item) => {
			const baseCategory = item?.meta?.native ? "React Native" : "Web";

			if (!acc[baseCategory]) {
				acc[baseCategory] = [];
			}

			const basePath = item?.meta?.native ? "native" : "web";
			const isGettingStarted = item.name === "getting-started";

			// Add getting-started pages but don't show in nav
			if (isGettingStarted) {
				return acc;
			}

			const category = item?.categories?.[0];
			if (!category) {
				return acc;
			}

			acc[baseCategory].push({
				title: item.name.startsWith("use") ? item.name : item.title,
				href: `/docs/${basePath}/${item.name === "icon" ? "icon-component" : item.name}`,
				isGettingStarted: false,
			});
			return acc;
		}, {});

	const items = [
		{
			title: "Welcome",
			href: "/docs",
		},
		...Object.entries(categoryGroups).map(([category, categoryItems]) => {
			const sortedItems = categoryItems.sort((a, b) => {
				return a.title.localeCompare(b.title);
			});

			const basePath = category === "React Native" ? "native" : "web";

			// Redirect /docs/web to /docs/web/getting-started
			if (window?.location?.pathname === `/docs/${basePath}`) {
				redirect(`/docs/${basePath}/getting-started`);
			}

			return {
				title: category,
				href: `/docs/${basePath}/getting-started`,
				items: sortedItems,
			};
		}),
	];

	return (
		<>
			<Navbar />
			<div className="relative mx-auto w-full max-w-[540px] px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
				<div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-[250px_1fr]">
					<aside className="border-r pr-4">
						<DocsSidebarNav items={items} />
					</aside>
					<main className="prose max-w-none dark:prose-invert">{children}</main>
				</div>
			</div>
		</>
	);
}
