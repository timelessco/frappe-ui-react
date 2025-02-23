import { DocsSidebarNav } from "@/components/docs-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import registry from "@/registry.json";

export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const categoryGroups = registry.items
		.filter((item) => item.type === "registry:ui")
		.reduce<Record<string, Array<{ href: string; title: string }>>>(
			(acc, item) => {
				const category = item?.categories?.[0];
				if (!category) {
					return acc;
				}

				if (!acc[category]) {
					acc[category] = [];
				}

				acc[category].push({
					title: item.title,
					href: `/docs/${item.name}${item.name === "icon" ? "-component" : ""}`,
				});
				return acc;
			},
			{},
		);

	const items = [
		{
			title: "Overview",
			href: "/docs",
		},
		{
			title: "Getting Started",
			href: "/docs/getting-started",
		},
		...Object.entries(categoryGroups).map(([category, categoryItems]) => ({
			title: category.charAt(0).toUpperCase() + category.slice(1),
			items: categoryItems.sort((a, b) => a.title.localeCompare(b.title)),
		})),
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<nav className="mb-8 flex items-center justify-between pb-4">
				<h1 className="text-2xl font-bold text-foreground">Documentation</h1>
				<ModeToggle />
			</nav>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-[250px_1fr]">
				<aside className="border-r pr-4">
					<DocsSidebarNav items={items} />
				</aside>
				<main className="prose max-w-none dark:prose-invert">{children}</main>
			</div>
		</div>
	);
}
