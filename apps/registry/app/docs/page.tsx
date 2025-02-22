import Welcome from "@/app/docs/content/welcome.mdx";

export default async function DocsPage() {
	return (
		<div className="prose dark:prose-invert">
			<Welcome />
		</div>
	);
}

export const generateMetadata = async () => {
	return {
		title: "Docs",
	};
};
