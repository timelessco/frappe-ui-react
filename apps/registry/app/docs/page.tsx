import Welcome from "@/app/docs/content/welcome.mdx";

export default async function DocsPage() {
	return (
		<div className="prose dark:prose-invert">
			<Welcome />
		</div>
	);
}

export function generateStaticParams() {
	return [{ name: "welcome" }, { name: "button" }, { name: "hello-world" }];
}

export const generateMetadata = async () => {
	return {
		title: "Docs",
	};
};
