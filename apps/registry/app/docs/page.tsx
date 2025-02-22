import Welcome from "@/app/docs/content/welcome.mdx";

export default async function DocsPage() {
	return <Welcome />;
}

export function generateStaticParams() {
	return [{ name: "welcome" }, { name: "button" }, { name: "hello-world" }];
}

export const generateMetadata = async () => {
	return {
		title: "Docs",
	};
};
