import { notFound } from "next/navigation";

export default async function Page({
	params,
}: {
	params: Promise<{ name: string[] }>;
}) {
	const [category, ...slugs] = (await params).name;
	const name = slugs.join("/");

	try {
		const { default: Post } = await import(
			`../content/${category}/${name}.mdx`
		);

		return (
			<div className="prose dark:prose-invert">
				<Post />
			</div>
		);
	} catch {
		notFound();
	}
}

export const dynamicParams = true;

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ name: string[] }>;
}) => {
	const [_, ...slugs] = (await params).name;
	const name = slugs[slugs.length - 1];
	return {
		title: name
			.replaceAll("-", " ")
			.replaceAll(/\b\w/gu, (char) => char.toUpperCase()),
	};
};
